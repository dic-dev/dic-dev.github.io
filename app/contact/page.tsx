export default function Page() {

  return (
    <div className="bg-white md:rounded md:shadow md:m-4 px-4 sm:px-6 pt-2 pb-12 md:p-6">
      <div className="text-base space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-medium pl-4 border-l-8 border-l-blue-500">お問い合わせ</h3>
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
