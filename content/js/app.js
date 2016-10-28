
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.adobeAppTracking();
    },
    platform: function () {
        if ((/Android/i.test(navigator.userAgent)))
            return 'Android';
        else if ((/iPhone|iPad|iPod/i.test(navigator.userAgent)))
            return 'iOS';
        return 'Unkown-Device';
    },
    adobeAppTracking: function(trackPage, strTrackType) {
    // Adobe Analytics for mobile app
    //add new build number to strckStr var below for every build
    
        var trackStr = "APP:_" + app.platform() + "_Zootopia_";
		var build    = "1.8";
		if(strTrackType == 'undefined' || strTrackType == null || strTrackType == undefined){
			if ($('body').hasClass('kids_index')) {
				trackStr += build + "_Kids_Index";
				ADB.trackState(trackStr);
			}
			else if ($('body').hasClass('kids_kids-mealbag')) {
				trackStr +=  build + "_Kids-Mealbag";
				ADB.trackState(trackStr);
			}
			 else if ($('body').hasClass('kids_games_puzzle')) {
				trackStr +=  build + "_Game_Puzzle";
				ADB.trackState(trackStr);
			}
			else if ($('body').hasClass('kids_games_memory')) {
				trackStr +=  build + "_Game_Memory";
				ADB.trackState(trackStr);
			}else{
				trackStr += "unknown";
				ADB.trackState(trackStr);
			}
		}else{
			trackStr += "_" + trackPage + ":" + strTrackType;
			ADB.trackState(trackStr);
			console.log(trackStr);
		}
    }
};

app.initialize();