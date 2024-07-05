

import React from "react";
// imporing json file from models folder
import videos from "../../models/videoData.json";
// now, goto browser and if there's an error in cosole...

function Video() {
  // comment these fetch API fun as of now... do not remove the lines

  // fetch("../../models/videoData.json")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error("Problem with fetching data!!", error))

  return (
    <div className="container">
      <div className="row">
        {videos.map((video, key) => (
          <div key={key}className="col-md-4">
            <a href={'https://youtube.com/watch?v=$(video.img_id'}>
            <div className="card">
              <img
                src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                className="ig-thumbnail"
                alt={video.title}
              />
              <div className="card-body">
                <h5 className="card-itle">{video.title}</h5>
                <p className="ard-text">{video.channelName}</p>
                <small>
                  {video.viewsCount} views - {video.likesCount} likes -{" "}
                  {video.duration}m
                </small>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;

// so its running for everyone... now

