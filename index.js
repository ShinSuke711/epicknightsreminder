
// Load up the discord.js library
const Discord = require("discord.js");
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
	var mscontent = message.content
	if(message.author.id=='555955826880413696') {//cái này là id của thằng EPIC RPG
var char1 = mscontent.charAt(0)
        if (typeof char1 != 'string'){
            char1 ='0'
        }
        var descriptiontext=''
		var nametext=''
		if (message.embeds.length==1){
            descriptiontext=message.embeds[0].description
            if (message.embeds[0].fields.length != 0){
                nametext=message.embeds[0].fields[0].name
            }
        }
		if (typeof descriptiontext =='string'){
			if (descriptiontext.startsWith('<:epicrpgarena')){
				message.channel.send('**__Arena__** <:epicrpgarena:722613850624491590> <:arenacookie:719150450540019743> <@&726382616391057450> ')
				//thay emoji id va id role arena vao dong tren
			}
		}
		if (typeof nametext == 'string'){
			if (nametext.startsWith('Help ')){
				message.channel.send('**__Mini Boss__** :dagger: :dagger: <@&726382616391057449> ')
			}
			else if (nametext.startsWith('**A MEGALODON')){
				message.channel.send('**__FISH__** <:normiefish:719148298518265927> <:normiefish:719148298518265927> <@&726382616391057455> ')
			}
			else if (nametext.startsWith('**AN EPIC TREE')){
				message.channel.send('**__CHOP__** <:woodenlog:719147724393676841> <:woodenlog:719147724393676841> <@&726382616391057456> ')
			}
			else if (nametext.startsWith("**IT'S RAINING")){
				message.channel.send('**__CATCH__** <:coin:719325049881886751> <:coin:719325049881886751> <@&726382616391057457> ')
			}
			else if (nametext.startsWith("**A LEGENDARY BOSS")){
				message.channel.send('**__LEGENDARY BOSS SPAWNED__** <:D9:721649592617271296> <:D11:721649631095685120> <:D10:721649619305627730> <@&721835806553276456> ')
			}
			else if (nametext.startsWith("**A BUNNY BOSS")){
				message.channel.send('**__BUNNY BOSS SPAWNED__** <@&726382616391057452> ')
			}
			else if (nametext.startsWith("**EGGS ARE FALLING")){
				message.channel.send('**__CATCH__** <:egg:722606388957937753> <:egg:722606388957937753>  <@&726382616391057452> ')
			}
		}
	if (char1 == '*') {
		if (mscontent.includes('is training')){ //training
			var kq = '?'
			mscontent = mscontent.substring(mscontent.indexOf('is training')+18)//xóa tất cả các ký tự từ đầu chuỗi đến hết 'is training in the'
			var char4 = mscontent.charAt(3)
			if (char4 == 'r'){ //' forest' ký tự thứ 4 là r
			var typelog = [0,0,0,0,0]//woodenlog,epiclog,superlog,megalog,hyperlog
			var vitri = 11//lấy ký tự phía sau ' forest!\n<:'
			for (var i=0;i<5;i++){
				if (mscontent.charAt(vitri) == 'w'){//<:woodenlog:555047053441630209>
					typelog[0]++
					vitri = vitri + 31
				}
				else if (mscontent.charAt(vitri) == 'E'){//<:EPICwoodenlog:541056003517710348>
					typelog[1]++
					vitri = vitri + 35
				}
				else if (mscontent.charAt(vitri) == 'S'){//<:SUPEREPICwoodenlog:541384398503673866>
					typelog[2]++
					vitri = vitri + 40
				}
				else if (mscontent.charAt(vitri) == 'M'){//<:MEGASUPEREPICwoodenlog:545396411316043776>
					typelog[3]++
					vitri = vitri + 44
				}
				else if (mscontent.charAt(vitri) == 'H'){//<:HYPERMEGASUPEREPICwoodenlog:546054891408457730>
					typelog[4]++
					vitri = vitri + 49
				}
			}
			//vitri lúc này nằm ở chữ o trong 'How'
				vitri = vitri + 10 //nhảy đến ký tự sau '.......>\nHow many <:'
				if (mscontent.charAt(vitri) == 'w'){
					kq=typelog[0].toString()
				}
				else if (mscontent.charAt(vitri) == 'E'){
					kq=typelog[1].toString()
				}			
				else if (mscontent.charAt(vitri) == 'S'){
					kq=typelog[2].toString()
				}
				else if (mscontent.charAt(vitri) == 'M'){
					kq=typelog[3].toString()
				}
				else if (mscontent.charAt(vitri) == 'H'){
					kq=typelog[4].toString()
				}
			}
			else if (char4 == 'e'){ //' field' ký tự thứ 4 là e
				var char24 = mscontent.charAt(23)
				var char44 = mscontent.charAt(43)
				var thutu = 5
				if (char24 == 'r'){//r trong first
					thutu = 0
				}
				else if (char24 == 'c'){//c trong second
					thutu = 1
				}
				else if (char24 == 'i'){//i trong third
					thutu = 2
				}
				else if (char24 == 'u'){//u trong fourth
					thutu = 3
				}
				else if (char24 == 'f'){//f trong fifth
					thutu = 4
				}
				var chuoi = 'banana'
				if (char44 == 'p'){
					chuoi = 'applea'
				}
				kq = chuoi.charAt(thutu)
			}
			else if (char4 == 'v'){ //' river' ký tự thứ 4 là v
				var kq = '1'
				var char42 = mscontent.charAt(41)//check ký tự tại vị trí này là n-<:normiefish hay g-<:goldenfish hay E-<:EPICfish
				if (char42 == 'g'){
					kq = '2'
				}
				else if (char42 == 'E'){
					kq = '3'
				}
			}
			else if (char4 == ' '){ //'... casino' ký tự thứ 4 là khoảng trắng
			var char27 = mscontent.charAt(26)
			var kq = 'no'
			if (char27 == 'U'){
				var char48 = mscontent.charAt(47)
				if (char48 == 'f'){
					kq = 'yes'
				}
			}
			else if (char27 == 'A'){
				var char39 = mscontent.charAt(38)
				if (char39 == 'e'){
					kq = 'yes'
				}
			}
			else if (char27 == 'I'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'c'){
					kq = 'yes'
				}
			}
			else if (char27 == 'C'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'a'){
					kq = 'yes'
				}
			}
			else if (char27 == 'F'){
				var char36 = mscontent.charAt(35)
				if (char36 == 'i'){
					kq = 'yes'
				}
			}
			}
			kq='This answer is '+kq+''
			message.channel.send(kq);
		}
	}
}
else if (!message.author.bot){
	mscontent = mscontent.replace(/  +/g, ' ').toLowerCase()
	var nhaclenh=true
	var multi = 1	
	if (message.member.roles.cache.has('726382616391057448')){ //thay id role reminder vào
		multi = 0.8
	}
	else if (message.member.roles.cache.has('726382616239931451')){ //thay id role giảm 10% cd
		multi = 0.7
	}
	else if (message.member.roles.cache.has('726382616239931449')){ //thay id role giảm 20% cd vào đây
		multi = 0.6
	}
	else if (message.member.roles.cache.has('726382616239931447')){ //thay id role giảm 35% cd vào đây
		multi = 0.45
	}
	else {
		nhaclenh=false
	}
if (mscontent.startsWith('rpg hunt')||mscontent.startsWith('rpg ascended hunt')){
		message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,70), {
			max: 1,
			time: 8000,
			errors: ['time']
		})
		.then(collected => {
			if (nhaclenh){
			var nhac = '__**HUNT**__ is ready ! <@'+message.author.id+'>'
			setTimeout(function(){
				message.channel.send(nhac);
			}, 60000*multi);
			}
		})
		.catch(collected => {
			console.log('hunt');
		});
	}
	else if (mscontent == 'rpg chop'||mscontent == 'rpg ascended chop'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**CHOP**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('chop')
			});
	}
	else if (mscontent == 'rpg axe'||mscontent == 'rpg ascended axe'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**AXE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('axe')
			});
	}
	else if (mscontent == 'rpg bowsaw'||mscontent == 'rpg ascended bowsaw'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BOWSAW**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('bowsaw')
			});
	}
	else if (mscontent == 'rpg chainsaw'||mscontent == 'rpg ascended chainsaw'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**CHAINSAW**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('chainsaw')
			});
	}
	else if (mscontent == 'rpg fish'||mscontent == 'rpg ascended fish'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**FISH**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('fish')
			});
	}
	else if (mscontent == 'rpg net'||mscontent == 'rpg ascended net'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**NET**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('net')
			});
	}
	else if (mscontent == 'rpg boat'||mscontent == 'rpg ascended boat'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BOAT**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('boat')
			});
	}
	else if (mscontent == 'rpg bigboat'||mscontent == 'rpg ascended bigboat'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**BIGBOAT**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('bigboat')
			});
}
else if (mscontent == 'rpg pickup'||mscontent == 'rpg ascended pickup'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**PICKUP**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('pickup')
			});
}
else if (mscontent == 'rpg ladder'||mscontent == 'rpg ascended ladder'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**LADDER**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('ladder')
			});
}
else if (mscontent == 'rpg tractor'||mscontent == 'rpg ascended tractor'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**TRACTOR**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('tractor')
			});
}
else if (mscontent == 'rpg greenhouse'||mscontent == 'rpg ascended greenhouse'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**GREENHOUSE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('greenhouse')
			});
}
else if (mscontent == 'rpg mine'||mscontent == 'rpg ascended mine'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**MINE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('mine')
			});
}
else if (mscontent == 'rpg pickaxe'||mscontent == 'rpg ascended pickaxe'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**PICKAXE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('pickaxe')
			});
}
else if (mscontent == 'rpg drill'||mscontent == 'rpg ascended drill'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**DRILL**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('drill')
			});
}
else if (mscontent == 'rpg dynamite'||mscontent == 'rpg ascended dynamite'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**DYNAMITE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 300000*multi);
				}
			})
			.catch(() => {
				console.log('dynamite')
			});
}
else if (mscontent == 'rpg tr'||mscontent == 'rpg training'||mscontent == 'rpg ascended tr'||mscontent == 'rpg ascended training'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**TRAINING**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 900000*multi);
				}
			})
			.catch(() => { 
			console.log('training')
			});
}
else if (mscontent == 'rpg adv'||mscontent == 'rpg adventure'||mscontent == 'rpg ascended adv'||mscontent == 'rpg ascended adventure'){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(message.author.username,2), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**ADVENTURE**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 3600000*multi);
				}
			})
			.catch(() => {
			});
}
else if (mscontent.startsWith('rpg buy ')){
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith('<:'), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**LOOTBOX**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 10800000);
				}
			})
			.catch(() => {
				console.log('lootbox')
			});
}
else if (mscontent == 'y' || mscontent == 'yes'){
			var questcheck = '**'+message.author.username+'#'
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(questcheck), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**QUEST**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 21600000*multi);
				}
			})
			.catch(() => {
				console.log('quest1')
			});
}
else if (mscontent == 'n' || mscontent == 'no'){
			var notaccept = '<@'+message.author.id+'>, you did'
			message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.content.startsWith(notaccept), {
				max: 1,
				time: 8000,
				errors: ['time']
			})
			.then(collected => {
				if (nhaclenh){
				var nhac = '__**QUEST**__ is ready ! <@'+message.author.id+'>'
				setTimeout(function(){
					message.channel.send(nhac);
				}, 3600000*multi);
				}
			})
			.catch(() => {
				console.log('quest2')
			});
}
else if (mscontent == 'rpg guild raid' ){
            message.channel.awaitMessages(response => response.author.id=='555955826880413696'&&response.embeds.length==1, {
                max: 1,
                time: 2000,
                errors: ['time']
            })
            .then(collected => {
                var descriptiontext=collected.first().embeds[0].description
                if (nhaclenh){
                    if (typeof descriptiontext =='string'){
                        if (descriptiontext.startsWith(':crossed_swords: **'+message.author.username)){
                            setTimeout(function(){
                                if (message.member.roles.cache.has('726382616395382830')){
                                    message.channel.send('**__GUILD RAID__** is ready! <@&726382616395382830> ')
                                }
                                if (message.member.roles.cache.has('726382616395382829')){
                                    message.channel.send('**__GUILD RAID__** is ready! <@&726382616395382829> ')
                                }
                                if (message.member.roles.cache.has('731608170241458227')){
                                    message.channel.send('**__GUILD RAID__** is ready! <@&731608170241458227> ')
                                }
                            }, 7200000);
                        }
                    }
                }
            })
            .catch(() => {
            });
}
}
});
client.login(process.env.token);
