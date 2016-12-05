/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.ja",{"vs/base/common/json":["シンボルが無効です","数値表示形式が無効です","プロパティ名が必要です","値が必要です","コロンが必要です","コンマが必要です","右中かっこが必要です","右角かっこが必要です","ファイルの終わりが必要です"],"vs/base/common/severity":["エラー","警告","情報"],"vs/base/node/zip":["zip ファイルの中に {0} が見つかりません。"],"vs/code/node/cliProcessMain":["拡張機能 '{0}' が見つかりませんでした。","拡張機能 '{0}' がインストールされていません。","発行元などの完全な拡張機能 ID を使用していることをご確認ください。例: {0}","拡張機能 '{0}' が正常にインストールされました。","拡張機能 '{0}' は既にインストールされています。","マーケットプレースで '{0}' が見つかりました。","インストールしています...","拡張機能 '{0}' v{1} が正常にインストールされました!","{0} をアンインストールしています...","拡張機能 '{0}' が正常にアンインストールされました!"],"vs/platform/configuration/common/configurationRegistry":["構成の設定を提供します。","設定の概要です。このラベルは、設定ファイルでコメントの区切り文字として使用します。","構成のプロパティの説明です。","設定すると、'configuration.type' は 'オブジェクトに設定されなければなりません","'configuration.title' は、文字列である必要があります","'configuration.properties' は、オブジェクトである必要があります"],"vs/platform/extensionManagement/common/extensionManagement":["拡張機能"],"vs/platform/extensionManagement/node/extensionGalleryService":["拡張子が見つかりません","Code のこのバージョンと互換性のある {0} のバージョンが見つかりませんでした。"],"vs/platform/extensionManagement/node/extensionManagementService":["正しくない拡張機能: package.json は JSON ファイルではありません。","正しくない拡張機能: マニフェスト名が一致しません。","正しくない拡張機能: マニフェストのパブリッシャーが一致しません。","正しくない拡張機能: マニフェストのバージョンが一致しません。","{0} を再インストールする前に、Code を再起動してください。","{0} を再インストールする前に、Code を再起動してください。","'{0}' をインストールすると、その依存関係もインストールされます。続行してもよろしいですか?","はい","いいえ","{0} を再インストールする前に、Code を再起動してください。","'{0}' のみをアンインストールしますか、または依存関係もアンインストールしますか?","限定","すべて","キャンセル","'{0}' をアンインストールしてもよろしいですか?","OK","キャンセル","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}' がこの拡張機能に依存しています。","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}' と '{2}' がこの拡張機能に依存しています。","拡張機能 '{0}' をアンインストールできません。拡張機能 '{1}'、'{2}'、その他がこの拡張機能に依存しています。","拡張機能を見つけられませんでした"],"vs/platform/extensions/common/extensionsRegistry":["VS Code 拡張機能の場合、拡張機能と互換性のある VS Code バージョンを指定します。* を指定することはできません。たとえば、^0.10.5 は最小の VS Code バージョン 0.10.5 との互換性を示します。","VS Code 拡張機能の公開元。","VS Code ギャラリーで使用される拡張機能の表示名。","VS Code ギャラリーで拡張機能の分類に使用されるカテゴリ。","VS Code マーケットプレースで使用されるバナー。","VS Code マーケットプレース ページ ヘッダー上のバナーの色。","バナーで使用されるフォントの配色テーマ。","このパッケージで表される VS Code 拡張機能のすべてのコントリビューション。","Marketplace で Preview としてフラグを付けられる拡張機能を設定します。","VS Code 拡張機能のアクティブ化イベント。","Marketplace の拡張機能ページのサイドバーに表示されるバッジの配列。","バッジのイメージ URL。","バッジのリンク。","バッジの説明。","他の拡張機能に対する依存関係。拡張機能の識別子は常に ${publisher}.${name} です。例: vscode.csharp。","パッケージが VS Code 拡張機能として公開される前に実行されるスクリプト。","128x128 ピクセルのアイコンへのパス。"],"vs/platform/extensions/node/extensionValidator":["`engines.vscode` 値 {0} を解析できませんでした。使用可能な値の例: ^0.10.0、^1.2.3、^0.11.0、^0.10.x など。","`engines.vscode` ({0}) で指定されたバージョンが十分に特定されていません。1.0.0 より前の vscode バージョンの場合は、少なくとも想定されているメジャー バージョンとマイナー バージョンを定義してください。例 ^0.10.0、0.10.x、0.11.0 など。","`engines.vscode` ({0}) で指定されたバージョンが明確ではありません。1.0.0 より後のバージョンの vscode の場合は、少なくとも、想定されているメジャー バージョンを定義してください。例 ^1.10.0、1.10.x、1.x.x、2.x.x など。","拡張機能が Code {0} と互換性がありません。拡張機能に必要なバージョン: {1}。","空の拡張機能の説明を入手しました","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `object` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は省略するか、型 `string[]` にする必要があります","プロパティ `{0}` は省略するか、型 `string[]` にする必要があります","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","プロパティ `{0}` は省略するか、型 `string` にする必要があります","拡張機能のフォルダー ({1}) の中に `main` ({0}) が含まれることが予期されます。これにより拡張機能を移植できなくなる可能性があります。","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","拡張機能のバージョンが semver と互換性がありません。"],"vs/platform/message/common/message":["閉じる","後で","キャンセル"],"vs/platform/request/common/request":["HTTP","使用するプロキシ設定。設定されていない場合、環境変数 http_proxy および https_proxy から取得されます。","提供された CA の一覧と照らしてプロキシ サーバーの証明書を確認するかどうか。","すべてのネットワーク要求に対して 'プロキシ認証' ヘッダーとして送信する値。"],"vs/platform/telemetry/common/telemetryService":["テレメトリ","利用状況データとエラーを Microsoft に送信できるようにします。"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7ba55c5860b152d999dda59393ca3ebeb1b5c85f/core/vs\code\node\cliProcessMain.nls.ja.js.map
