const cards = `
http://sanguoshaenglish.blogspot.com/2010/07/dismantle.html
http://sanguoshaenglish.blogspot.com/2010/07/blaze.html
http://sanguoshaenglish.blogspot.com/2010/07/duress.html
http://sanguoshaenglish.blogspot.com/2010/07/duel.html
http://sanguoshaenglish.blogspot.com/2010/07/barbarians.html
http://sanguoshaenglish.blogspot.com/2010/07/steal.html
http://sanguoshaenglish.blogspot.com/2010/07/peach-garden.html
http://sanguoshaenglish.blogspot.com/2010/07/iron-shackles-tie-suo-lian-huan.html
http://sanguoshaenglish.blogspot.com/2010/07/raining-arrows.html
http://sanguoshaenglish.blogspot.com/2010/07/harvest-wu-gu-feng-deng.html
http://sanguoshaenglish.blogspot.com/2010/07/negate-wu-xie-ke-ji.html
http://sanguoshaenglish.blogspot.com/2010/07/draw2-wu-zhong-sheng-you.html
http://sanguoshaenglish.blogspot.com/2010/08/gender-double-swords-ci-xiong-shuang-gu.html
http://sanguoshaenglish.blogspot.com/2010/08/heaven-scorcher-halberd-fang-tian-hua.html
http://sanguoshaenglish.blogspot.com/2010/08/rock-cleaving-axe-guan-shi-fu.html
http://sanguoshaenglish.blogspot.com/2010/08/frost-blade-han-bing-jian.html
http://sanguoshaenglish.blogspot.com/2010/08/unicorn-bow-qi-lin-gong.html
http://sanguoshaenglish.blogspot.com/2010/08/blue-steel-blade-qing-gang-jian.html
http://sanguoshaenglish.blogspot.com/2010/08/green-dragon-crescent-blade-qing-long.html
http://sanguoshaenglish.blogspot.com/2010/08/serpent-halberd-zhang-ba-she-mao.html
http://sanguoshaenglish.blogspot.com/2010/08/zhu-ge-crossbow-zhu-ge-lian-nu.html
http://sanguoshaenglish.blogspot.com/2010/08/feathered-fan-zhu-que-yu-shan.html
http://sanguoshaenglish.blogspot.com/2010/08/ancient-scimitar-gu-ding-dao.html
http://sanguoshaenglish.blogspot.com/2011/12/silver-moon-lance-yin-yue-qiang-sp010.html
http://sanguoshaenglish.blogspot.com/2010/07/eight-trigrams-ba-gua-zhen.html
http://sanguoshaenglish.blogspot.com/2010/07/silver-lion-helmet-bai-yin-shi-zi.html
http://sanguoshaenglish.blogspot.com/2010/07/ren-wang-shield-ren-wang-dun.html
http://sanguoshaenglish.blogspot.com/2010/07/rattan-armour-teng-jia.html
http://sanguoshaenglish.blogspot.com/2010/08/red-hare-chi-tu.html
http://sanguoshaenglish.blogspot.com/2010/08/da-yuan.html
http://sanguoshaenglish.blogspot.com/2010/08/di-lu.html
http://sanguoshaenglish.blogspot.com/2010/08/hua-liu.html
http://sanguoshaenglish.blogspot.com/2010/08/shadow-jue-ying.html
http://sanguoshaenglish.blogspot.com/2010/08/zhua-huang-fei-dian.html
http://sanguoshaenglish.blogspot.com/2010/08/zi-xing.html
`.trim().split('\n');

const Jimp = require('jimp');
const http = require('http');

cards.forEach((elem) => {
	console.log(elem);
});