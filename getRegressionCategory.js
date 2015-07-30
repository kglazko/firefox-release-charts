//Let's do the Regressions now!
    function getWebCoreRegressions(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&component=DOM&component=DOM%3A%20Animation&component=DOM%3A%20Apps&component=DOM%3A%20Contacts&component=DOM%3A%20Content%20Processes&component=DOM%3A%20Core%20%26%20HTML&component=DOM%3A%20CSS%20Object%20Model&component=DOM%3A%20Device%20Interfaces&component=DOM%3A%20Events&component=DOM%3A%20IndexedDB&component=DOM%3A%20Push%20Notifications&component=DOM%3A%20Security&component=DOM%3A%20Service%20Workers&component=DOM%3A%20Workers&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Core&v1=%2B", function(data7){
        webDOMReg = data7.bugs.length;
        if(isReadyforReg() == true){
            drawRegBarChart(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
      });

    }

    function getWebJSRegressions(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&component=Layout&component=Layout%3A%20Block%20and%20Inline&component=Layout%3A%20Floats&component=Layout%3A%20Form%20Controls&component=Layout%3A%20HTML%20Frames&component=Layout%3A%20Images&component=Layout%3A%20Misc%20Code&component=Layout%3A%20R%20%26%20A%20Pos&component=Layout%3A%20Tables&component=Layout%3A%20Text&component=Layout%3A%20View%20Rendering&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Core&v1=%2B", function(data8){
        webJSReg = data8.bugs.length;
        if(isReadyforReg() == true){
            drawRegBarChart(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
      });

    }

    function getWebLayoutRegressions(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&component=Layout&component=Layout%3A%20Block%20and%20Inline&component=Layout%3A%20Floats&component=Layout%3A%20Form%20Controls&component=Layout%3A%20HTML%20Frames&component=Layout%3A%20Images&component=Layout%3A%20Misc%20Code&component=Layout%3A%20R%20%26%20A%20Pos&component=Layout%3A%20Tables&component=Layout%3A%20Text&component=Layout%3A%20View%20Rendering&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Core&v1=%2B", function(data9){
        webLayoutReg = data9.bugs.length;
        if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}

	function getProdCoreRegressions (version) {
		$.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&component=Audio%2FVideo&component=Audio%2FVideo%3A%20MSG%2Fcubeb&component=Audio%2FVideo%3A%20Playback&component=Audio%2FVideo%3A%20Recording&component=Build%20Config&component=Canvas%3A%202D&component=Canvas%3A%20WebGL&component=CSS%20Parsing%20and%20Computation&component=Disability%20Access%20APIs&component=DMD&component=Document%20Navigation&component=Drag%20and%20Drop&component=Editor&component=Embedding%3A%20APIs&component=Embedding%3A%20GRE%20Core&component=Embedding%3A%20Mac&component=Embedding%3A%20MFC%20Embed&component=Embedding%3A%20Packaging&component=Event%20Handling&component=File%20Handling&component=Find%20Backend&component=FxAccounts&component=Gecko%20Profiler&component=General&component=Geolocation&component=GFX%3A%20Color%20Management&component=Graphics&component=Graphics%3A%20Layers&component=Graphics%3A%20Text&component=Hardware%20Abstraction%20Layer%20%28HAL%29&component=History%3A%20Global&component=HTML%3A%20Form%20Submission&component=HTML%3A%20Parser&component=Identity&component=Image%20Blocking&component=ImageLib&component=Installer%3A%20XPInstall%20Engine&component=Internationalization&component=IPC&component=js-ctypes&component=Keyboard%3A%20Navigation&component=Localization&component=mach&component=MathML&component=Memory%20Allocator&component=MFBT&component=mozglue&component=Nanojit&component=Networking&component=Networking%3A%20Cache&component=Networking%3A%20Cookies&component=Networking%3A%20DNS&component=Networking%3A%20Domain%20Lists&component=Networking%3A%20File&component=Networking%3A%20FTP&component=Networking%3A%20HTTP&component=Networking%3A%20JAR&component=Networking%3A%20WebSockets&component=Panning%20and%20Zooming&component=Permission%20Manager&component=Plug-ins&component=Preferences%3A%20Backend&component=Print%20Preview&component=Printing%3A%20Output&component=Printing%3A%20Setup&component=Profile%3A%20BackEnd&component=Profile%3A%20Migration&component=Profile%3A%20Roaming&component=QuickLaunch%20%28AKA%20turbo%20mode%29&component=RDF&component=Rewriting%20and%20Analysis&component=Security&component=Security%3A%20CAPS&component=Security%3A%20Process%20Sandboxing&component=Security%3A%20PSM&component=Security%3A%20UI&component=Selection&component=Serializers&component=Spelling%20checker&component=SQL&component=String&component=SVG&component=Tracking&component=Untriaged&component=Web%20Audio&component=Web%20Services&component=Web%20Speech&component=WebDAV&component=WebRTC&component=WebRTC%3A%20Audio%2FVideo&component=WebRTC%3A%20Networking&component=WebRTC%3A%20Signaling&component=Widget&component=Widget%3A%20Android&component=Widget%3A%20Cocoa&component=Widget%3A%20Gonk&component=Widget%3A%20Gtk&component=Widget%3A%20Qt&component=Widget%3A%20Win32&component=Widget%3A%20WinRT&component=X-remote&component=XBL&component=XForms&component=XML&component=XP%20Toolkit%2FWidgets%3A%20Menus&component=XP%20Toolkit%2FWidgets%3A%20XUL&component=XPCOM&component=XPConnect&component=XSLT&component=XUL&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Core&v1=%2B", function(data10){
        prodCoreReg = data10.bugs.length;
          if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}

	function getProdFirefoxRegressions (version) {
		$.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Firefox&v1=%2B", function(data11){
        prodFirefoxReg = data11.bugs.length;
          if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}

	function getProdFennecRegressions (version) {
		$.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Firefox%20for%20Android&v1=%2B", function(data12){
        prodFennecReg = data12.bugs.length;
          if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}

	function getProdLoopRegressions (version) {
		$.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Hello%20%28Loop%29&v1=%2B", function(data13){
        prodLoopReg = data13.bugs.length;
          if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}

		function getProdToolkitRegressions (version) {
		$.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox42&keywords=regression%2C%20&keywords_type=allwords&o1=equals&product=Toolkit&v1=%2B", function(data14){
        prodToolkitReg = data14.bugs.length;
        if(isReadyforReg() == true){
            drawRegBarChart(webDOMReg, webJSReg, webLayoutReg, prodCoreReg, prodFirefoxReg, prodFennecReg, prodLoopReg, prodToolkitReg);
            }
      });
	}
