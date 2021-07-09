import React, { createRef, useState, useEffect } from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles.js';
import classNames from 'classnames'

const NewsCard = ({article:{description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) =>{
    const classes = useStyles()
    //we need to set the ref to all our active cards to make the scrol work
    const [elRefs, setElRefs] = useState([])
    const scrollToRef = (ref)=> window.scroll(0, ref.current.offsetTop - 50); //x axis=0


    //We need to have refernce for all the cards, if we donot have it, we need to create one
    //We are going to do this only once when our component first mount
    useEffect(()=>{
        setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()));
    },[])

    //Now we have all the refs and we can scroll through them everytime
    //this useEffect will run everytime it reads an article and will run if there is any update in i, activearticle or elRefs
    useEffect(()=>{
        if(i===activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    }, [i, activeArticle, elRefs])

    return (
        <Card ref = {elRefs[i]} className={classNames(classes.card, activeArticle ===i ? classes.activeCard:null)}>
            <CardActionArea href={url} target="_blank">  
                <CardMedia className={classes.media} image={urlToImage || 'https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg'} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color= 'textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant={"h5"}>{title}</Typography>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component='p' >{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>                
                <Typography variant={"body2"} color={"textSecondary"} > Article: { i + 1 }</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard