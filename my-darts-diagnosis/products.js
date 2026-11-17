// ============================================================
// マイダーツ診断商品データ
// ------------------------------------------------------------
// このファイルだけを書き換えれば商品を差し替えられます。
// 価格・在庫は変動します。checkedAt はデータ確認日です。
// 本公開の前に、必ず全商品の価格・在庫・URLを再検証してください。
// スペック出典：2026-11-14に各販売ページを実際に開いて確認した記録。
// ページに明記がなかった項目は null（診断マッチングでは中立扱い）。
//
// フィールド:
// name, maker 製品名 / メーカー
// shape "torpedo" | "straight" | "barrel" | null
// weight (g), length (mm), maxDia (mm)
// balance "front" | "semi-front" | "center" | "semi-rear" | "rear" | null
// cut (文字列), cutLevel 1=弱め 2=普通 3=強め | null
// tungsten (%) tip "2BA" など
// price 税込・円 | null（未確認の場合は null）
// shop, url 販売店名 / 販売ページURL（なければ ""）
// inStock false は結果に表示されません
// checkedAt "YYYY-MM-DD"
// ============================================================
const PRODUCTS = [
{
name: "TRiNiDAD PRO SANTANA（大久保李佳モデル）",
maker: "TRiNiDAD",
shape: "torpedo", weight: 19.0, length: 42.0, maxDia: 7.3,
balance: "semi-front",
cut: "シャークカット＋ダブルリング＋縦カット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 13200, shop: "エスダーツ 楽天市場店",
url: "https://item.rakuten.co.jp/s-darts/tdd1941/?variantId=tdd1941",
inStock: false, checkedAt: "2026-11-14",
note: "確認時点で売り切れ表示のため非表示。在庫が復活したら inStock を true にしてください。"
},
{
name: "One80 Jack Sheppard 2BA 19g Gold",
maker: "One80",
shape: "straight", weight: 19.0, length: 48.0, maxDia: 6.2,
balance: null,
cut: "リングカット＋デルタカット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 17600, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000016816",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "TARGET THE MIRACLE G7.5（鈴木未来モデル）",
maker: "TARGET",
shape: null, weight: 19.0, length: 50.0, maxDia: 7.0,
balance: null,
cut: "ミーリング＋横カット（インフィニットミラー）", cutLevel: 2,
tungsten: 95, tip: "2BA",
price: 22800, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000019102",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "TARGET CHARIS G5（Cathy Leungモデル）",
maker: "TARGET",
shape: null, weight: 19.0, length: 45.0, maxDia: 7.0,
balance: "front",
cut: "チェッカーカット＋リングカット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: null, shop: "エスダーツ 楽天市場店",
url: "https://item.rakuten.co.jp/s-darts/tad7001/?variantId=tad7001",
inStock: true, checkedAt: "2026-11-14",
note: "価格は確認時点でページから読み取れなかったため null。公開前に要確認。"
},
{
name: "MONSTER OGRE3 V4 GOLD 2BA 20.5g",
maker: "MONSTER",
shape: "torpedo", weight: 20.5, length: 43.5, maxDia: 7.2,
balance: null,
cut: "リング＋スパイラル＋縦カット", cutLevel: 2,
tungsten: 95, tip: "2BA",
price: null, shop: "ダーツハイブ 楽天市場店",
url: "https://item.rakuten.co.jp/hive/0105501005995/?variantId=0105501005995",
inStock: false, checkedAt: "2026-11-14",
note: "2026-11-15に楽天ハイブで売り切れを確認。価格も未確認のため null。"
},
{
name: "TRiNiDAD PRO Jose Type4（Jose De Sousaモデル）",
maker: "TRiNiDAD",
shape: null, weight: 18.0, length: 55.0, maxDia: 6.2,
balance: null,
cut: "ダブルリング＋縦カット", cutLevel: 3,
tungsten: 90, tip: "2BA",
price: 13000, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000016183",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "DYNASTY A-FLOW BLACK LINE BIONIC3（Berry Van Peerモデル）",
maker: "DYNASTY",
shape: "straight", weight: 18.0, length: 50.0, maxDia: 6.3,
balance: null,
cut: "KATANA宝珠カット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: null, shop: "カウントアップ 楽天市場店",
url: "https://item.rakuten.co.jp/count-up/0102901010383/",
inStock: true, checkedAt: "2026-11-14",
note: "価格は確認時点でページから読み取れなかったため null。公開前に要確認。"
},
{
name: "Harrows SUPERGRIP 90%",
maker: "Harrows",
shape: "straight", weight: 14.5, length: 46.0, maxDia: 6.0,
balance: "center",
cut: "ダブルリングカット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 15400, shop: "エスダーツ グローバル",
url: "https://global.s-darts.com/detail/000000027150/",
inStock: true, checkedAt: "2026-11-14",
note: "商品名は16g表記だが、スペック欄のバレル単体重量は14.5g。weight はスペック欄の値を採用。"
},
{
name: "COSMO DARTS DISCOVERY LABEL（野毛駿平モデル）",
maker: "COSMO DARTS",
shape: "torpedo", weight: 19.0, length: 45.0, maxDia: 7.4,
balance: null,
cut: "", cutLevel: null,
tungsten: 90, tip: "2BA",
price: null, shop: "エスダーツ 楽天市場店",
url: "https://item.rakuten.co.jp/s-darts/csd1591/",
inStock: true, checkedAt: "2026-11-14",
note: "価格・カット詳細は未確認。公開前に要確認。"
},
{
name: "TIGA JAGUARFLY 2BA 19.5g",
maker: "TIGA",
shape: "straight", weight: 19.5, length: 48.0, maxDia: 6.5,
balance: null,
cut: "ウイングカット（ワイルドウイング）", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 11000, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000014994?category_page_id=softdarts-tiga",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "DYNASTY KATANA Kiryu Kou 桐生 煌 17g（松田淳モデル）",
maker: "DYNASTY",
shape: null, weight: 17.0, length: 42.0, maxDia: 7.3,
balance: null,
cut: "ダイヤモンドカット（ヒシガタ）", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 19800, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000018030",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "DMC Maverick 2BA 20g",
maker: "DMC",
shape: null, weight: 20.0, length: 40.0, maxDia: 7.4,
balance: null,
cut: "リングカット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 35200, shop: "natural-9",
url: "https://www.natural-9.jp/view/item/000000014846",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "COSMO DARTS DISCOVERY LABEL David Cameron v2 2BA",
maker: "COSMO DARTS",
shape: null, weight: 22.0, length: 55.0, maxDia: 6.4,
balance: null,
cut: "", cutLevel: null,
tungsten: 90, tip: "2BA",
price: null, shop: "TiTO 楽天市場店",
url: "https://item.rakuten.co.jp/dartsshoptito/ba-csm-035-/",
inStock: true, checkedAt: "2026-11-14",
note: "価格・カット詳細は未確認。公開前に要確認。"
},
{
name: "SANGREAL Bandiera（津村友弥モデル）",
maker: "SANGREAL",
shape: "torpedo", weight: 22.0, length: 46.0, maxDia: 7.0,
balance: "front",
cut: "トリプルリング＋ローレット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 16500, shop: "natural-9",
url: "",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "TRiNiDAD GONZALEZ Type7（西哲平モデル）",
maker: "TRiNiDAD",
shape: null, weight: 21.0, length: 45.0, maxDia: 7.4,
balance: "center",
cut: "ダブルリング＋マイクロカット", cutLevel: 2,
tungsten: 90, tip: "2BA",
price: 14300, shop: "ER SPORTS（au PAY マーケット）",
url: "",
inStock: true, checkedAt: "2026-11-14"
},
{
name: "TRiNiDAD ROMERO Type2（岩田夏海モデル）",
maker: "TRiNiDAD",
shape: null, weight: 21.0, length: 45.0, maxDia: 7.2,
balance: "semi-front",
cut: "", cutLevel: null,
tungsten: 95, tip: "2BA",
price: 14800, shop: "",
url: "",
inStock: true, checkedAt: "2026-11-14",
note: "価格は定価。在庫は確認時点で要確認だったため、公開前に必ず再確認すること。"
}
];
