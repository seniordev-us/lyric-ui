import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons components
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SongStructureItem from "../../layouts/SongStructureItem"

// core components
import componentStyles from "../../assets/theme/components/Infos/SongStructureList";


const useStyles = makeStyles(componentStyles);

export default function SongStructureList({ }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.structureList} bgcolor="primary.light" borderRadius="4px" pt={2.75} pb={.75} px={2.25}>
      <Box mb={4} className="overallStructure">
        <SongStructureItem
          structureTitle="Overall"
          Amount={81}
          structureColor="overallColor"
        >
        </SongStructureItem>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <SongStructureItem
            structureTitle="Melody"
            Amount={72}
            structureColor="melodyColor"
          >
          </SongStructureItem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SongStructureItem
            structureTitle="Chords"
            Amount={81}
            structureColor="chordsColor"
          >
          </SongStructureItem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SongStructureItem
            structureTitle="Structure"
            Amount={78}
            structureColor="structureColor"
          >
          </SongStructureItem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SongStructureItem
            structureTitle="Familarity"
            Amount={72}
            structureColor="familarityColor"
          >
          </SongStructureItem>
        </Grid>
      </Grid>
    </Box>
  );
}