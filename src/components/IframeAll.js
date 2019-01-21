import React from "react";
import "./IframeAll.css";

const IframeAll = props => (
    <div className="IframesAllContainer">
    <div><iframe style={{border: "1px solid #FFF"}} width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FNTSRadio%2Fmartyn-31st-december-2018%2F" frameborder="0"></iframe></div>
    <div><iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2FNTSRadio%2Fthe-nca-show-w-brassfoot-prodigy-special-21st-june-2017%2F" frameborder="0" ></iframe></div>
    <div><iframe style={{border: "1px solid #FFF"}} width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBCR_Radio%2Fancient-methods-18%2F" frameborder="0" ></iframe></div>        
    <div><iframe style={{border: "1px solid #FFF"}}  width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FSoundcrash%2Fthe-soundcrash-funk-and-soul-weekender-2019-donuts-mix-002%2F" frameborder="0" ></iframe></div>
    <div><iframe width="100%" height="400" src="https://www.mixcloud.com/widget/iframe/?feed=%2Fbootskong2%2Fbtl-radio-there-will-be-more-old-school-radio-stations-in-2015-what-do-you-think-hiphop-rap%2F" frameborder="0" ></iframe></div>
    </div>
)


export default IframeAll;