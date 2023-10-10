export default function Home() {

  return (
    <div className="bg-white md:rounded md:shadow md:m-4 px-4 sm:px-6 pt-2 pb-12 md:p-6">
      <div className="text-base text-gray-900 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold pl-4 border-l-8 border-l-blue-500">
            私について
          </h3>
          <p>
            熊本県八代市生まれの30歳男性。引きこもり・アルバイト・派遣を転々とした後、現在は埼玉県在住で都内のIT系企業に入社予定（2社目）。<br />
            お仕事では、PHPでバックエンドの開発をすることになりそう。<br/>
            フロントエンドはNext.js（React）が好きです。こちらのブログもNext.js製です。<br />
            勉強や遊び、遊びとか遊び、日常の記録を残していけたらと思いこのブログを作りました。<br />
            長年離れていたSNS等もまた始めようと思っています。<br/>
            生暖かい目で見てやってくださいね！
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-3">
          <h3 className="text-xl font-semibold pl-4 border-l-8 border-l-blue-500">このサイトについて</h3>
          <p>
            このブログはNext.js, Contentlayer, TailwindCSSで構築し、Github Pagesにデプロイしています（0円構成最高）。<br />
          </p>
          <ul>
            <li>Privacy Policy(準備中)</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-3">
          <h3 className="text-xl font-semibold pl-4 border-l-8 border-l-blue-500">お問い合わせ</h3>
          <p>
            ブログへのお問い合わせは
            <a
              href="https://forms.gle/uy4qArWtQZ47ej4u6"
              target="_blank" rel="noopener noreferrer"
              className="px-1 text-blue-600 underline decoration-1"
            >
              こちら (Google Forms)
            </a>
            からお願いします。<br />
            尚、私の忙しさと気まぐれにより返信しないことも多々ありますのでご理解の程よろしくお願い致します。
          </p>
        </div>
      </div>
    </div>
  )
}
