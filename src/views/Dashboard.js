import React,{useState,useEffect} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "../components/Headers/Header";
import EarnCard from "../components/Cards/EarnCard";
import ListenerCard from "../components/Cards/ListenerCard";
import SongInfoWindow from "../components/Infos/SongInfoWindow";
import SongStructureList from "../components/Infos/SongStructureList";
import SongRelatedList from "../components/Infos/SongRelatedList";

import componentStyles from "../assets/theme/views/Dashboard";
import demoJson from "../demo.json"

const useStyles = makeStyles(componentStyles);

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const storedInfo = localStorage.getItem('musicInfo');
  const musicInfo = storedInfo ? JSON.parse(storedInfo) : demoJson;
  const songElementsArray = musicInfo["data"]["songCharacteristics"]["elements"];
  const songTagsArray = musicInfo["data"]["songCharacteristics"]["tags"];
  const songElementsTags = [...songElementsArray, ...songTagsArray];

  return (
    <Box position="relative">
      <Header 
        logo={{
          innerLink: "/dashboard",
          imgSrc: require("../assets/img/logo.png").default,
          imgAlt: "logo-image",
        }}
        help={{
          imgSrc: require("../assets/img/help_icon.png").default,
          imgAlt: "help-icon",
        }}
      />
      <Box className="dashboard-wrap">
        <Box className="dashboard-container">
          <Box px={4} className="dashboard-content">
            <Grid container>
              <Grid item sm={12} md={8} className={classes.widthMobile}>
                <Box>
                  <Grid container className={classes.cardGroup}>
                    <Grid md={12} lg={6} item>
                      <EarnCard 
                        earnCardInfo = {{
                          amount: musicInfo["data"]["projectedEarnings"]["amount"],
                          currencySymbol: musicInfo["data"]["projectedEarnings"]["currencySymbol"]
                        }}
                      />
                    </Grid>
                    <Grid  md={12} lg={6} item>
                      <ListenerCard
                        listenerCardInfo = {{
                          amount: musicInfo["data"]["projectedListeners"]["amount"],
                          changedAmount: musicInfo["data"]["projectedListeners"]["historicalChange"]
                        }}
                        listenerIcon= {{
                          imgSrc: require("../assets/img/headphone.png").default,
                          imgAlt: "listener-icon",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2}>
                  <SongInfoWindow
                    songInfoTag={{
                      key: musicInfo["data"]["songCharacteristics"]["key"],
                      bpm: musicInfo["data"]["songCharacteristics"]["bpm"],
                      elementsTags: songElementsTags,
                      timeSignature: musicInfo["data"]["songCharacteristics"]["timeSignature"],
                    }}
                    songDetail={{
                      title: musicInfo["data"]["title"],
                      description: musicInfo["data"]["description"],
                    }}
                    songInfoGraph={{
                      file: musicInfo["data"]["url"],
                      genres: musicInfo["data"]["genres"]
                    }}
                  >
                  </SongInfoWindow>
                </Box>
              </Grid>
              <Grid item sm={12} md={4}>
                <SongStructureList
                  songStructureInfo = {{
                    overall: musicInfo["data"]["score"]["overall"],
                    melody: musicInfo["data"]["score"]["melody"],
                    chords: musicInfo["data"]["score"]["chords"],
                    structure: musicInfo["data"]["score"]["starFactor"],
                    familiarity: musicInfo["data"]["score"]["familiarity"],
                  }}
                >
                </SongStructureList>
                <SongRelatedList
                  relatedSongLists = {musicInfo["data"]["songCharacteristics"]["similarSongs"]}
                >
                </SongRelatedList>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
