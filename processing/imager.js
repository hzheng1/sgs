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
http://sanguoshaenglish.blogspot.com/2010/07/rations-depleted.html
http://sanguoshaenglish.blogspot.com/2010/07/acedia.html
http://sanguoshaenglish.blogspot.com/2010/07/lightning.html
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

const heroes = `
http://sanguoshaenglish.blogspot.com/2010/07/liu-bei.html
http://sanguoshaenglish.blogspot.com/2010/07/elder-zhu-ge-liang.html
http://sanguoshaenglish.blogspot.com/2010/07/zhao-yun.html
http://sanguoshaenglish.blogspot.com/2010/07/guan-yu.html
http://sanguoshaenglish.blogspot.com/2010/07/huang-yue-ying.html
http://sanguoshaenglish.blogspot.com/2010/07/ma-chao.html
http://sanguoshaenglish.blogspot.com/2010/07/zhang-fei.html
http://sanguoshaenglish.blogspot.com/2010/08/younger-zhu-ge-liang.html
http://sanguoshaenglish.blogspot.com/2010/07/pang-tong.html
http://sanguoshaenglish.blogspot.com/2010/07/huang-zhong.html
http://sanguoshaenglish.blogspot.com/2010/07/wei-yan.html
http://sanguoshaenglish.blogspot.com/2010/09/meng-huo.html
http://sanguoshaenglish.blogspot.com/2010/09/zhu-rong.html
http://sanguoshaenglish.blogspot.com/2010/08/cao-cao.html
http://sanguoshaenglish.blogspot.com/2010/08/guo-jia.html
http://sanguoshaenglish.blogspot.com/2010/08/si-ma-yi.html
http://sanguoshaenglish.blogspot.com/2010/08/xia-hou-dun.html
http://sanguoshaenglish.blogspot.com/2010/08/xu-chu.html
http://sanguoshaenglish.blogspot.com/2010/08/zhang-liao.html
http://sanguoshaenglish.blogspot.com/2010/08/zhen-ji.html
http://sanguoshaenglish.blogspot.com/2010/08/dian-wei.html
http://sanguoshaenglish.blogspot.com/2010/08/xun-yu.html
http://sanguoshaenglish.blogspot.com/2010/08/cao-ren.html
http://sanguoshaenglish.blogspot.com/2010/08/xia-hou-yuan.html
http://sanguoshaenglish.blogspot.com/2010/09/cao-pi.html
http://sanguoshaenglish.blogspot.com/2010/09/xu-huang.html
http://sanguoshaenglish.blogspot.com/2013/03/sun-quan.html
http://sanguoshaenglish.blogspot.com/2013/03/da-qiao.html
http://sanguoshaenglish.blogspot.com/2013/03/gan-ning.html
http://sanguoshaenglish.blogspot.com/2013/03/huang-gai.html
http://sanguoshaenglish.blogspot.com/2013/03/lu-meng.html
http://sanguoshaenglish.blogspot.com/2013/03/lu-xun.html
http://sanguoshaenglish.blogspot.com/2013/03/sun-shang-xiang.html
http://sanguoshaenglish.blogspot.com/2013/03/zhou-yu.html
http://sanguoshaenglish.blogspot.com/2013/03/tai-shi-ci.html
http://sanguoshaenglish.blogspot.com/2013/03/xiao-qiao.html
http://sanguoshaenglish.blogspot.com/2013/03/zhou-tai.html
http://sanguoshaenglish.blogspot.com/2013/03/sun-jian.html
http://sanguoshaenglish.blogspot.com/2013/03/lu-su.html
http://sanguoshaenglish.blogspot.com/2010/08/diao-chan.html
http://sanguoshaenglish.blogspot.com/2010/08/hua-tuo.html
http://sanguoshaenglish.blogspot.com/2010/08/lu-bu.html
http://sanguoshaenglish.blogspot.com/2010/08/yuan-shao.html
http://sanguoshaenglish.blogspot.com/2010/08/pang-de.html
http://sanguoshaenglish.blogspot.com/2010/08/yan-liang-wen-chou.html
http://sanguoshaenglish.blogspot.com/2010/08/zhang-jiao.html
http://sanguoshaenglish.blogspot.com/2010/08/yu-ji.html
http://sanguoshaenglish.blogspot.com/2010/09/dong-zhuo.html
http://sanguoshaenglish.blogspot.com/2010/09/jia-xu.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-zhu-ge-liang.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-zhou-yu.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-guan-yu.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-lu-meng.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-cao-cao.html
http://sanguoshaenglish.blogspot.com/2010/09/demi-god-lu-bu.html
`.trim().split('\n');

const Jimp = require('jimp'),
			http = require('http'),
			fs = require('fs'),
			request = require('request');

cards.forEach((elem) => {
	request({
		url: elem,
		method: 'GET'
	}, (err, res, body) => {
		const matches = body.match(/(http:\/\/[A-Za-z0-9-\_\.]*\.blogspot\.com\/[A-Za-z0-9\-_\/]+\/s320\/[a-z]+.jpg)/g);
		const imageURL = matches[matches.length - 1];
		const filename = imageURL.split('/').pop();
		request(imageURL).pipe(fs.createWriteStream(`../data/rawImages/${filename}`)).on('close', () => {
			Jimp.read(`../data/rawImages/${filename}`, (err, img) => {
				if (img.bitmap.width > img.bitmap.height) {
					img = img.rotate(90);
				}
				img.crop(30, 60, 225 - 60, 136).write(`../data/rawImages/cropped-${filename}`);
			});
		});
	})
});

heroes.forEach((elem) => {
	request({
		url: elem,
		method: 'GET'
	}, (err, res, body) => {
		const matches = body.match(/(http:\/\/[A-Za-z0-9-\_\.]*\.blogspot\.com\/[A-Za-z0-9\-_\/]+\/s320\/[a-z]+.jpg)/g);
		const imageURL = matches[matches.length - 1];
		console.log(imageURL);
		const filename = imageURL.split('/').pop();
		request(imageURL).pipe(fs.createWriteStream(`../data/heroImages/${filename}`)).on('close', () => {
			Jimp.read(`../data/heroImages/${filename}`, (err, img) => {
				img.crop(54, 32, 140, 210).write(`../data/heroImages/cropped-${filename}`);
			});
		});
	})
});
