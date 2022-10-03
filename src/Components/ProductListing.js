import React, { useState } from "react";
import "../Components/ProductListing.css";
import Grid from '@mui/material/Grid';

const ProductListing = ({ data }) => {


    return (
        <div className="productWrapper">
            <div className="dataResult">
                <h2 className="product-title">Food</h2>
                <div className="product-wrap">
                <Grid container  spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data.map((value, key) => {
                        return (
                            <>
                                <Grid item key={value.id} xs={6}>
                                    <div className="product-content">
                                    <img className="product-image" src={value.imageUrl} />
                                    </div>
                                <div className="product-heading">{value.Ingredient}</div>
                                <div className="product-subtitle">{value.Shorttext}</div>
                                </Grid>
                            </>)

                    })}
                </Grid>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
