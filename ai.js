import OpenAI from 'openai';
import * as fs from "node:fs";

let prompt = fs.readFileSync('prompt.txt', 'utf8');
const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    baseURL: 'https://api.theb.ai/v1'
});

async function GenerateAnswer(question) {
    if(question === "xmemo"){
        return "xmsl 你什么都没做错，全怪我那令人作呕的嫉妒和卑微的自尊心，看见你的文字我完全破防了，我直接丢盔弃甲了 看见你这图的那一秒 我满头大汗 浑身发冷 亿郁症瞬间发作了 生活仿佛没了颜色 像是被抓住尾巴的赛亚人 带着海楼石的能力者 抽离尾兽的人柱力 像是没了光的奥特曼 彻底断绝了生的希望。我几乎都快羡慕得疯了，倒在床上蒙住被子就开始抱着枕头尖叫流泪，嘴里一边喊着卧槽卧槽，一边又忍着，我边发边哭，打字的手都是抖的，后来我的手抖得越来越厉害，从心头涌起的思想、情怀和梦想，这份歆羡和悔恨交织在一起，我的笑还挂在脸上，可是眼泪一下子就掉下来了。求你了别发了，我生活再难再穷我都不会觉得难过，只有你们发这种东西的时候，我的心里像被刀割一样的痛，打着字泪水就忍不住的往下流。每天早上6点起床晚上12点睡觉，年复一年地学到现在，憧憬着一个月赚上万块的幸福生活，憧憬着美好阳光的未来。我打开了手机，看到你的截图，我感到了深深的差距，我直接跳进了家门口的井里我真的我要嫉妒疯了为什么！！为什么这个人不是我我求你了求你了！不要在发了，我真的要羡慕嫉妒疯了怎么办我要嫉妒死了啊啊啊啊我急了，手机电脑全砸了，本来就有抑郁症的我，被别人说我破防了，我真的恼羞成怒了，仿佛被看穿了，躲在网络背后的我，这种感觉真的好难受，我被看穿的死死地，短短的破防两个字，我伪装出来的所有的坚强和强颜欢笑全都崩塌了，成了一个被人笑话的小丑 ，我真的不想再故作坚强了，玩心态我输的什么都不剩"
    }
    if (question === "") {
        return "羡慕死了"
    }
    if (question.startsWith("xm")) {
        return question
    }
    const chatCompletion = await client.chat.completions.create({
        messages: [
            {role: "system", content: prompt},
            {role: 'user', content: question}
        ],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices[0].message.content;
}

export {GenerateAnswer}