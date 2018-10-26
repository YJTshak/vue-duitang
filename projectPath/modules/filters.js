
import Vue from 'vue'
import path from 'path'

// {{banner.image_url | formatImage}}
Vue.filter('formatImage', (url) =>{
    let ext = path.extname(url);
    return url.replace(ext, '.thumb.300_0' +ext)
})
//background-image:url(https://b-ssl.duitang.com/uploads/people/201810/23/20181023190249_TXtWB.thumb.100_100_c.jpeg);
Vue.filter('smallImage', (url) => {
    let al = path.extname(url);
    return url.replace(al, '.thumb.100_100_c' +al)
})




