import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      
      <div className="widget_article">
        <div className="widgets_articleleft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets_articleright">
          <h4>Coronavirus: Lagos updates</h4>
          <p>Tops news - 324 readers</p>
        </div>
      </div>

      <div className="widget_article">
        <div className="widgets_articleleft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets_articleright">
          <h4>Bitcoin hits new high</h4>
          <p>Tops news - 2,324 readers</p>
        </div>
      </div>

      <div className="widget_article">
        <div className="widgets_articleleft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets_articleright">
          <h4>Tech Mahindra to hire 3,000</h4>
          <p>Tops news - 14,644 readers</p>
        </div>
      </div>

    </div>
  )
}

export default Widgets;