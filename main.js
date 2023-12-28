import {Telegraf, Markup} from 'telegraf';
import {message} from 'telegraf/filters';
const token = '6763686770:AAGZ17JDYt7ueJCtM_AK39a9OYa_G3QPGvc';
const webAppUrl = 'https://angular-tg-app-9d340.web.app';
const bot = new Telegraf(token);
bot.command('start', (context) => {
	context.reply(
		'Press button to start application',
		Markup.keyboard([
			Markup.button.webApp('Run app', webAppUrl + '/feedback')
		])
	)
});
bot.on(message('web_app_data'), async (ctx) => {
	console.log(ctx.webAppData.data.json());
	const data = ctx.webAppData.data.json()
	ctx.reply(`Your message: ${data.feedback ?? 'Empty message'}`);
})
bot.launch();