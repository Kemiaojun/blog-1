import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { color: '#282935', media: '(prefers-color-scheme: light)' },
    { color: '#282935', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function Page() {
  const lastBuildTime = formatDateTime(
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      weekday: 'short',
    },
    new Date(),
  )

  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            zhangyu@MacBook-Air:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on 2024-12-05</p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
            <p>
                Hi, I&apos;m <strong>Ke Miao</strong>, in Chinese my name is{' '}
                <strong>克喵爱吃卤面</strong>.
              </p>
              <p>
                我是一个致力于分享资源和生活的普通大学牲~在 <strong>2024</strong>年初开始有这个想法,
                更新不定时，不用iOS，所以不会特意找，有需求的可以通过下方的联系方式(最好是邮箱或电报),
                我会尽力找，不保成功，兴趣来源<code>[好软分享](https://github.com/yoyodadada/haoruanfenxiang)</code>。
              </p>
              <p>
                我从他/她的分享下解决了很多麻烦，十分感谢{' '}
                <code>[好软分享](https://github.com/yoyodadada/haoruanfenxiang)</code>。
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>声明</span>
                <span>项目</span>
                <span>博客介绍</span>
                <span>经历</span>
                <span>技能</span>
                <span>联系方式</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>声明</TypedText>
            <TypedContent>
            <p>
                我只搬运资源，作者注明禁止搬运的不搬，有作者后来不想分享了可以通过下方的联系方式来告知我，
                看到会第一时间删除文件，付费资源作者授权的话会分享，作者那抽成，不论同不同意，还是感谢作者的支持。
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>项目</TypedText>
            <TypedContent>
            <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/kemiaofx'>
                      Github分享资源项目
                    </a>
                  </strong>
                </li>
                <li>作者所有个人的网址和软件在网盘的位置。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/astropaper'>
                      astro博客项目(未完善)
                    </a>
                  </strong>
                </li>
                <li>一个astro博客。</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/BLOG'>
                      NotionNext博客项目(未完善)
                    </a>
                  </strong>
                </li>
                <li>
                  小白博客项目，正在完善中。
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/BBlog'>
                      hexo博客项目(未完善)
                    </a>
                  </strong>
                </li>
                <li>
                  anzhiyu大佬主题
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/kemiaoTG'>
                      TG资源站
                    </a>
                  </strong>
                </li>
                <li>
                  一个和电报频道联动的博客
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/Kemiaojun/Kemiaojun.github.io'>
                      github简易博客项目(未完善)
                    </a>
                  </strong>
                </li>
                <li>
                  随便玩玩
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/lumianya/lumianya.github.io'>
                      魔改hexo博客项目(未完善)
                    </a>
                  </strong>
                </li>
                <li>
                  挺好用的。
                </li>
              </ul>
            </TypedContent>
            <TypedText>博客介绍</TypedText>
            <TypedContent>
            <p>
                我曾经也会为搜索资源困难而难过，这个项目应运而生，包括<code>JAndroid</code>,
                <code>Windows</code>, <code>AI</code>, <code>AI</code>, <code>iOS</code>,
                <code>建站</code>, <code>工具</code>{' '}
                <code>代码</code>,等等。
              </p>
              <p>
                我不定时更新博客文章，不代表主要发布在<code>电报</code>的所有内容，缺什么可以去<code>[频道](https://t.me/kemiaofx_me)</code>看！
              </p>
            </TypedContent>
            <TypedText>experience</TypedText>
            <TypedContent>
              <p>Until now, I have worked for two companies only.</p>
              <p>
                The first company focused on developing high-performance and
                versatile dialing systems and management platforms for internal
                enterprise use, along with various mini-programs and Apps.
              </p>
              <p>
                The second company specialized in creating visually appealing
                and high-performance e-commerce platforms and Apps for
                cross-border trade.
              </p>
            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I excel in <code>JavaScript</code> and <code>TypeScript</code>,
                proficiently utilizing <code>CSS</code> to create visually
                appealing and responsive web pages.
              </p>
              <p>
                I have a deep understanding of <code>React</code> and have
                explored other popular frameworks as well. Currently, my work
                primarily involves using <code>Next.js</code>, and I have
                extensive experience with <code>App Router</code>.
              </p>
              <p>
                In addition to front-end development, I am also familiar with
                backend development using tools such as <code>Prisma</code>,{' '}
                <code>NestJS</code>, and <code>GraphQL</code>.
              </p>
              <p>
                Furthermore, I have experience in mobile App development using
                <code>React Native</code> and <code>SwiftUI</code>.
              </p>
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/zhangyu1818'>Github</a>
                  <a href='https://twitter.com/zhangyu1818'>Twitter</a>
                  <a href='https://juejin.cn/user/4089838986339927'>掘金</a>
                  <a href='https://dev.to/zhangyu1818'>Dev.to</a>
                  <a href='https://medium.com/@zhangyu1818'>Medium</a>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:hey@zhangyu.dev'>hey@zhangyu.dev</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}