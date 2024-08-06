import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import {GenerateAnswer} from "./ai.js";
import {RandomString} from "./utils.js";

const bot = new Telegraf(process.env.BOT_TOKEN)

await bot.telegram.setMyCommands([
    {command: 'start', description: '开始'},
    {command: 'xm', description: '开始羡慕'},
])

bot.start((ctx) => ctx.reply('<b>羡慕死了！</b>\n使用 <code>/xm "消息"</code> 或者 /xm 回复一条消息来使用', {parse_mode: 'HTML'}))

bot.command('xm', async (ctx) => {
    // if split length is 1, check the message that user reply
    if (ctx.message.text.split(' ').length === 1) {
        if (ctx.message.reply_to_message) {
            if (ctx.message.reply_to_message.text) {
                await ctx.sendMessage(await GenerateAnswer(ctx.message.reply_to_message.text), {reply_to_message_id: ctx.message.reply_to_message.message_id})
            }else{
                await ctx.sendMessage("羡慕死了", {reply_to_message_id: ctx.message.reply_to_message.message_id})
            }
        } else {
            await ctx.reply('请发送 /xm "消息“ 或者回复一条消息')
        }
    } else {
        if (ctx.message.reply_to_message) {
            if (ctx.message.reply_to_message.text) {
                await ctx.sendMessage(await GenerateAnswer(ctx.message.text), {reply_to_message_id: ctx.message.reply_to_message.message_id})
            }else{
                await ctx.sendMessage("羡慕死了", {reply_to_message_id: ctx.message.reply_to_message.message_id})
            }
        } else {
            await ctx.reply(await GenerateAnswer(ctx.message.text))
        }
    }
})

bot.on('inline_query', async (ctx) => {
    const result = [
        {
            type: 'article',
            id: RandomString(16),
            title: '发送羡慕！',
            input_message_content: {
                message_text: await GenerateAnswer(ctx.inlineQuery.query)
            },
            reply_markup: {
                inline_keyboard: [[
                    {text: '我也要羡慕！', switch_inline_query_current_chat: ''}
                ]]
            }
        }
    ]
    try {
        await ctx.answerInlineQuery(result)
    } catch (e) {
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))