import React from 'react'
import { Grid } from '@mui/material';
import './guns_grid.css';


const Guns_grid = ({ weapons, selectedSkins, openModal }) => {
  return (
    <div className="guns_grid">
      <Grid container spacing={0}>
        <Grid item xs={3}><img src={selectedSkins["classic"] ? selectedSkins["classic"].image : "./classic.png"} alt="" id='classic' onClick={() => openModal("classic")} /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./stinger.png" alt="" id='stinger' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./bulldog.png" alt="" id='bulldog' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./marshal.png" alt="" id='marshal' /><div className="grid_box"></div></Grid>

        <Grid item xs={3}><img src="./shorty.png" alt="" id='shorty' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./spectre.png" alt="" id='spectre' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./guardian.png" alt="" id='guardian' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./operator.png" alt="" id='operator' /><div className="grid_box"></div></Grid>

        <Grid item xs={3}><img src="./frenzy.png" alt="" id='frenzy' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./bucky.png" alt="" id='bucky' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./phantom.png" alt="" id='phantom' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./ares.png" alt="" id='ares' /><div className="grid_box"></div></Grid>

        <Grid item xs={3}><img src="./ghost.png" alt="" id='ghost' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./judge.png" alt="" id='judge' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./vandal.png" alt="" id='vandal' /><div className="grid_box"></div></Grid>
        <Grid item xs={3}><img src="./odin.png" alt="" id='odin' /><div className="grid_box"></div></Grid>

        <Grid item xs={3}><img src="./sheriff.png" alt="" id='sheriff' /><div className="grid_box"></div></Grid>
        <Grid item xs={6}><div className="submit"><button className='btn'>TAKE MY MONEY !</button></div></Grid>
        <Grid item xs={3}><img src="./knife.png" alt="" id='knife' /><div className="grid_box"></div></Grid>

      </Grid>
    </div>


  )
}

export default Guns_grid;
