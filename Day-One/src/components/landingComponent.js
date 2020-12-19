import React, { Component } from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'
import { Grid, Paper, Button } from '@material-ui/core';
import ButtonComponents from './buttonComponents';


function LandingComponent() {
    return (

        <div style={{ backgroundColor: "#282c34", textAlign: "center" }}>
            <Carousel>
                <Carousel.Item indicators={false} interval={3000}>
                    <img
                        className="d-block w-100 sm" style={{ WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,8),rgba(0,0,0,0.5),rgba(0,0,0,0) )" }}
                        src="https://www.wallpaperhi.com/thumbnails/detail/20121002/loadscreen%20ulduarraid%20full%20wow%20world%20of%20warcraft%20dump%204000x2000%20wallpaper_www.wallpaperhi.com_97.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ height: "10rem", color: "#fefefe" }}>
                        <h1 style={{ fontSize: 50, fontFamily: "fantasy" }}>Fantasy</h1>
                        <p style={{ fontSize: 20, fontFamily: "fantasy" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sm" style={{ WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0) )" }}
                        src="https://cdn.wallpapersafari.com/85/45/wTezm0.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ height: "10rem", color: "#fefefe" }}>
                        <h1 style={{ fontSize: 50, fontFamily: "fantasy" }} >Myth</h1>
                        <p style={{ fontSize: 20, fontFamily: "fantasy" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 sm" style={{ WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0) )" }}
                        src="https://i.pinimg.com/originals/f8/3a/41/f83a412712fdf3d1c9fe5b0f9af5cfaa.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ height: "10rem", color: "#fefefe" }}>
                        <h1 style={{ fontSize: 50, fontFamily: "fantasy" }} >Historical</h1>
                        <p style={{ fontSize: 20, fontFamily: "fantasy" }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div>
                <h3 style={{ color: "#fefefe", fontFamily: "cursive", marginTop: 25, textAlign: "left", marginLeft: 28, }}>Genre</h3>
                <ButtonComponents />
            </div>

            <Grid container spacing={3} className="d-block w-100 sm" justify="center" >
                <Grid item >
                    <Paper elevation={3} style={{ marginLeft: "3rem", marginRight: "2rem", marginTop: "2rem", marginBottom: "20rem", backgroundColor: "#fefefe", paddingBottom: "3rem", paddingTop: "3rem", borderRadius: 10 }}>
                        <h1>Hello World</h1>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                fontSize: 16,
                                fontWeight: "bold"
                            }}
                        > Testing
                        </Button>
                    </Paper>
                </Grid>
            </Grid>

        </div >


    )
}

export default LandingComponent;

