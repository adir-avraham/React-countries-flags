import React from 'react';
import { connect } from 'react-redux'
import Image from '../image'
import { Container, Grid } from '@material-ui/core';


export class ImageList extends React.Component<any, any> {
    render() {
        const { imgUrls } = this.props
        
        
        return (
            
            <Container style={{paddingTop: "16px", paddingBottom: "16px"}} maxWidth="md">
                <Grid container spacing={4}>
                    {imgUrls.map((img: any, index: number) => <Image key={`img_${index}`} {...img}/>)}
                </Grid>
            </Container>
        )
    }
}



const mapStateToProps = (state: any) => {
    const { imgUrls } = state
    return { imgUrls }
  }
  
  
  const mapDispatchToProps = () => {
    return null;
  }
  
  export default connect(mapStateToProps, null) (ImageList)
  
