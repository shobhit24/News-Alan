import  React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'

//Information cards to make user understand Alan Ai app work flow with examples

const infoCards = [
    { color: '#082348', title: 'Latest News', text: 'Give me the latest news...' },
    { color: '#1565c0', title: 'News by Categories', info: 'Entertainment, Health, Business, Science, Sports, Technology...', text: 'Give me the latest Business news...' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with Bitcoin...' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN...' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    
    const classes= useStyles()

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems= 'stretch' spacing={3}> 
                    {infoCards.map(infoCard =>(
                        <Grid item xs={12} sm={6} md={4} lg={3}  className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                                <Typography variant="h6" style={{color:'#e9f0b9'}}><strong>{infoCard.title}</strong></Typography>
                                {
                                    infoCard.info ?
                                    (<Typography variant="subtitle1"><strong>{infoCard.title.split(" ")[2]}:</strong> <br />{infoCard.info}</Typography>):
                                    <Typography variant="h5"><strong><i>Alan at your service!</i></strong></Typography>
                                }
                                <Typography variant="body2"><strong>Try saying:</strong> <br /><i>{infoCard.text}</i></Typography>
                            </div>
                            {/* <InCard  infoCard = {infoCard}/> */}
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return(
        <Grow in> 
            <Grid className={classes.container} container alignItems= 'stretch' spacing={3}>
                {articles&&articles.map((article, i) =>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
                    <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                </Grid>
                )}
            </Grid>          
        </Grow>
    )
} 

export default NewsCards