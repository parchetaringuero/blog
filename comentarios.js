var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//eval
function hp_d11(s){var o="",ar=new Array(),os="",ic=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^2;os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}

//eval
var numComments = numComments || 5, avatarSize = avatarSize || 60, characters = characters || 40, defaultAvatar = defaultAvatar || "https://www.gravatar.com/avatar/?d=mm", moreLinktext = moreLinktext || " More &raquo;", showAvatar = typeof showAvatar === "undefined" ? true : showAvatar, showMorelink = typeof showMorelink === "undefined" ? false : showMorelink, roundAvatar = typeof roundAvatar === "undefined" ? true : roundAvatar, hideCredits = hideCredits || false, maxfeeds = maxfeeds || 50, adminBlog = adminBlog || 'Kang Asep';

    function ms_recent(kangismet) {
        var commentsHtml;
        commentsHtml = "<ul class=\"ms_recent\">";
        ntotal=0;
        for (var i = 0; i < maxfeeds; i++) {
            var commentlink, authorName, authorAvatar, avatarClass;
            if (i == kangismet.feed.entry.length) {
                break;
            }
            if(ntotal>=numComments){
                break;
            }
            var entry = kangismet.feed.entry[i];
            for (var l = 0; l < entry.link.length; l++) {
                if (entry.link[l].rel == "alternate") {
                    commentlink = entry.link[l].href;
                }
            }
            for (var a = 0; a < entry.author.length; a++) {
                authorName = entry.author[a].name.$t;
                authorAvatar = entry.author[a].gd$image.src;
            }

            if (authorName!= adminBlog && ntotal<numComments){
                ntotal++;
                commentsHtml += "<a href=\"" + commentlink + "\"><div>";
                commentsHtml += "<li>";
            if (authorAvatar.indexOf("/s1600/") != -1) {
                authorAvatar = authorAvatar.replace("/s1600/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("/s220/") != -1) {
                authorAvatar = authorAvatar.replace("/s220/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("/s512-c/") != -1 &&
                authorAvatar.indexOf("http:") != 0) {
                authorAvatar = "http:" + authorAvatar.replace("/s512-c/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("blogblog.com/img/blank.gif") != -1) {
                if (defaultAvatar.indexOf("gravatar.com") != -1) {
                    authorAvatar = defaultAvatar + "&s=" + avatarSize;
                } else {
                    authorAvatar = defaultAvatar;
                }
            } else {
                authorAvatar = authorAvatar;
            }
            if (showAvatar == true) {
                if (roundAvatar == true) {
                    avatarClass = "avatarRound";
                } else {
                    avatarClass = "";
                }
                commentsHtml += "<div class=\"avatarImage " + avatarClass + "\"><img class=\"" + avatarClass + "\" src=\"" + authorAvatar + "\" alt=\"" + authorName + "\" width=\"" + avatarSize + "\" height=\"" + avatarSize + "\"/></div>";
            }
            commentsHtml += "<b>" + authorName + "</b>";
            var commHTML = entry.content.$t;
            var commBody = commHTML.replace(/(<([^>]+)>)/gi, "");
            if (commBody != "" && commBody.length > characters) {
                commBody = commBody.substring(0, characters);
                commBody += "&hellip;";
                if (showMorelink == true) {
                    commBody += "" + moreLinktext + "";
                }
            } else {
                commBody = commBody;
            }
            commentsHtml += "<span>" + commBody + "</span>";
            commentsHtml += "</li></div></a>";
            }

        }

        commentsHtml += "</ul>";
        var hideCSS = "";
        if (hideCredits == true) {
            hideCSS = "display:none;";
        }
        commentsHtml += "<span style=\"font-size:8px;display:block;text-align:right;" + hideCSS + "\">widget by <a href=\"http://msdesign92.blogspot.com\" target=\"_blank\">MS Design</a></span>";
        document.write(commentsHtml);
    }


}
