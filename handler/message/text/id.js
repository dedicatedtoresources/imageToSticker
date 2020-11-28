exports.textTnC = () => {
    return `
To be used by the people in this group only.`
}

exports.textMenu = (pushname) => {
    return `
Hi, *${pushname}!* 

Here's what you can do with the bot. 

Sticker Maker:
1. *#sticker*
Convert an image into a sticker, send the image with the caption #sticker or reply to any image that has been sent in the group/chat, with #sticker.

2. *#stickers* _<Image Url>_
To change the image from the url to a sticker.

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
To turn a gif into a sticker (Giphy only)

Downloader:
1. *#tiktok* _<post / video url>_
Will return video tiktok.

2. *#fb* _<post / video url>_
Will return the Facebook video download link.

3. *#ig* _<post / video url>_
Will return the Instagram video download link.

4. *#twt* _<post / video url>_
Will return the Twitter video download link.

Etc:
1. *#tnc*
Displays Bot Terms and Conditions.
Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
    ⚠ [ *Admin Group Only* ] ⚠ 
    Here are some of the group admin features included in this bot!
    
    1. *#kick* @user
    Removing members from the group (can be more than 1).
    
    2. *#promote* @user
    Promote members to group admins.
    
    3. *#demote* @user
    Demote Group admins.
    
    3. *#tagall*
    Mention of all group members.`
}

exports.textDonasi = () => {
    return `
Thanks for using the bot, Yash is my creator. Please buy him a coffee when you meet him next time. `
}
