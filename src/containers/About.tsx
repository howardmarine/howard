
import React from 'react'

// Example of using paths alias via tsconfig.json to easily re-use legacy code
// Also, use TypeScript and JavaScript interchangeably.
import aliasExample from "@myPathAlias/component";
//

import viki from '../drive.mp4'

export default () => (
  <div>
    <h1>Marine Howard</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
    <p>I am learning React, learn with me</p>
    { aliasExample }

    <video id='videoTag' autoPlay loop muted>
    <source  src={ viki }
  type="video/mp4"/>
  <source  src={ viki }
type="video/ogg" />
  your browser doesnt suppot video
    </video>
  </div>
)
