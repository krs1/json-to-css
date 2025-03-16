`style:build` を実行すると `src/styles/json`のファイルから
`src/styles/variables.css` を吐き出す

`index.css` では `variables.css` をimportしているためグローバル変数として色定義ができる

グローバル変数は  
color:'var(--surface-error-message)',  
のような感じで使えるが  
panda.config.tsで宣言すると  
color:'errorMessage',  
のような感じで使える  


memo
https://qiita.com/_lemoo_/items/ae5d3af8da73767d34ce
