import React, {useEffect, useState} from 'react'
import { Grid} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Tooltip from '@mui/material/Tooltip';

 function MainPage() {

    const [postInfo, setPostInfo] = useState()

    useEffect(() => {
        fetch(" https://api.yup.io/posts/post/12294")
        .then(r => r.json())
        .then((profileData) => setPostInfo(profileData))
    }, [])

//     console.log(postInfo.weights.popularity)

//     const popularityNum = () => {
//         if(postInfo && postInfo['weights']){
//             return <div>{postInfo['weights']["popularity"]}</div>
//     }
// }

// console.log(postInfo["weights"]["popularity"])

    return postInfo && postInfo["weights"] ? (
        <div>
            <h1>YUP MAINPAGE</h1>
            <img src={postInfo.previewData.img} height="400px" width="400px" />
         <Grid container spacing={3}>
            <Grid item xs={4}>
            <Tooltip title="Favorite">
            <FavoriteIcon  />
            </Tooltip>
            <div>{postInfo["weights"]["popularity"]}</div>
            </Grid>
            <Grid item xs={4}>
            <Tooltip title="Smart">
            <LightbulbIcon />
            </Tooltip>
            <div>{postInfo["weights"]["intelligence"]}</div>
            </Grid>
            <Grid item xs={4}>
            <Tooltip title="Funny">
            <InsertEmoticonIcon />
            </Tooltip>
            <div>{Math.floor(postInfo["weights"]["funny"])}</div>
            </Grid>
            </Grid>
        </div>
    ) : null
}

export default MainPage