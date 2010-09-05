/*
 *  Content script injected in the framed tab 
 *  @author: Jean-Lou Dupont
 */

// Cannot get the parent window from a content script...
//var parent_loc=window.parent.location;
chrome.extension.sendRequest({content_script:true, "url": document.URL});
