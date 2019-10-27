import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



export default class Image extends React.Component<any, any> {

    render() {
        const { imgUrl } = this.props
     
        console.log("image com=>" + this.props)
        return (
            <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardMedia
                style={{ paddingTop: '56.25%' }}
                image={imgUrl}
                title="Image title" />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                {/* {Title} */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
    }
}


