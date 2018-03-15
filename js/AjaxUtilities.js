function postAjaxCall(url, callback, data, header) {
    $.ajax({
        crossDomain: true,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'authz_token': getAuthzToken()
        },
        type: 'POST',
        data: JSON.stringify(data),
        async: false,
        url: config.BASE_URL + url + getUserNameForParam(url),
        success: function(data, textStatus, xhr) {
            if (callback == undefined || callback == null) {
                return;
            }
            callback(data, textStatus, xhr);
            if (data.errorCode == 1) {
                setAuthzToken(undefined);
                //global.user = undefined;
                putInClientStorage("loginUserName", undefined);
            }

        }
    });
    Utils.log("config url: " + config.BASE_URL + url + add);
}

function getAjaxCall(url, callback) {
    //In case of userid null or account id null, which happens when unauthorized response received, dont send further call.
    if (url.indexOf("userId=null") > 0 || url.indexOf("userId=undefined") > 0 || url.indexOf("accountId=null") > 0 || url.indexOf("accountId=undefined") > 0 || getUserNameForParam(url).indexOf("username=null") > 0) {
        return;
    }
    $.ajax({
        crossDomain: true,
        headers: {
            'authz_token': getAuthzToken()
        },
        type: 'GET',
        async: false,
        url: config.BASE_URL + url + getUserNameForParam(url),
        success: function(data, textStatus, xhr) {
            if (callback == undefined || callback == null) {
                return;
            } {
                callback(data, textStatus, xhr);
            }
            if (data.errorCode == 1) {
                setAuthzToken(undefined);
                //global.user = undefined;
                putInClientStorage("loginUserName", undefined);
            }

        }
    });
}
