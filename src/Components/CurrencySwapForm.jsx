import React, { useState } from "react";
import dataset from "../data/data";
import CurrencySelect from "./CurrencySelect";
import performCurrencySwap from "../helpers/PerformCurrencySwap";
import {
    Box,
    Button,
    Grid,
    InputLabel,
    Paper,
    TextField,
    colors,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function CurrencySwapForm() {
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState("");
    const [swappedAmount, setSwappedAmount] = useState("");

    const currentDateTime = new Date().toISOString();

    const handleFromCurrencyChange = (selectedOption) => {
        setFromCurrency(selectedOption.value);
    };

    const handleToCurrencyChange = (selectedOption) => {
        setToCurrency(selectedOption.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = performCurrencySwap(
            fromCurrency,
            toCurrency,
            amount,
            dataset,
            currentDateTime
        );

        console.log(result);

        if (result !== null) {
            setSwappedAmount(result);
        } else {
            console.error("Currency pair not found in the dataset.");
        }
    };

    return (
        <Paper
            elevation={3}
            sx={{
                background:
                    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url("/loficolor.jpg")',
                padding: "20px",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1>EggSwap 🐤</h1>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    <CurrencySelect
                        label={
                            <InputLabel
                                style={{
                                    color: "black",
                                    fontFamily: "sans-serif",
                                    fontSize: "16px",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                From Currency 🥚
                            </InputLabel>
                        }
                        dataset={dataset}
                        selectedCurrency={fromCurrency}
                        onChange={handleFromCurrencyChange}
                    />
                    <CurrencySelect
                        label={
                            <InputLabel
                                style={{
                                    color: "black",
                                    fontFamily: "sans-serif",
                                    fontSize: "16px",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                To Currency 🐣
                            </InputLabel>
                        }
                        dataset={dataset}
                        selectedCurrency={toCurrency}
                        onChange={handleToCurrencyChange}
                    />

                    <Grid container spacing={1}>
                        <Grid item xs={8} style={{ marginTop: "5px" }}>
                            <TextField
                                placeholder={"0"}
                                sx={{
                                    "&::placeholder": {
                                        color: "grey",
                                    },
                                }}
                                variant="outlined"
                                onChange={(e) => setAmount(e.target.value)}
                                type="number"
                                value={amount}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={4} style={{ marginTop: "5px" }}>
                            <Button
                                variant="contained"
                                endIcon={<SwapHorizIcon />}
                                type="submit"
                                style={{
                                    backgroundColor: "#ffcc5f",
                                    color: "black",
                                }}
                                fullWidth
                            >
                                Swap
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            {swappedAmount && <p>Swapped amount: {swappedAmount}</p>}
        </Paper>
    );
}

export default CurrencySwapForm;
