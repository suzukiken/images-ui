import * as React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Storage } from 'aws-amplify';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/InfoIcon';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(6, 0, 0.5),
  },
  container: {
    flexGrow: 1
  },
  contentTitle: {
    margin: theme.spacing(2.4, 0, 0.6)
  },
  contentContent: {
    margin: theme.spacing(0, 0, 0)
  },
  contentTag: {
    margin: theme.spacing(0.3),
    fontSize: 11
  },
  contentDate: {
    margin: theme.spacing(0.5, 0),
    fontSize: 12
  },
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minHeight: 180,
    maxHeight: 400,
  }
}))

function Home() {
  const classes = useStyles();

  const [s3files, setS3Files] = useState([])

  
  function copyUrl(url) {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.value = url
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
  
  useEffect(() => {
    async function doList() {
      try {
        Storage.list('', {
          customPrefix: 'images/',
        })
          .then(result => {
            console.log(result)
            const fs = []
            for (const obj of result) {
              if (obj.key) {
                fs.push({
                  url: 'https://images.figmentresearch.com/images/' + obj.key,
                  lastModified: obj.lastModified,
                  size: obj.size,
                  key: obj.key,
                })
              }
            }
            setS3Files(fs)
          })
      } catch (err) {
        console.log('error doList')
      }
    }
    doList()
  }, [])
  
  return (
    <React.Fragment> 
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          images
        </Typography>
      </Container>
      <Container maxWidth="md">
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
          {s3files.map((obj, index) => (
            <ImageListItem key={index}>
              <img src={obj.url} alt={obj.key} />
              <ImageListItemBar
                subtitle={obj.lastModified.toJSON() + ' ' + parseInt(obj.size/1000) + 'KB'}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </React.Fragment> 
  );
}

export default Home

/*
                actionIcon={
                  <IconButton aria-label={obj.url} className={classes.icon} onClick={() => copyUrl(obj.url)}>
                    <InfoIcon />
                  </IconButton>
                }
*/