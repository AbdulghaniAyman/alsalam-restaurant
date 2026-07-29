// قائمة الأصناف الكاملة والمحدثة بدقة
const menuData = [
    // القسم الأول: فراخ السلام
    {
        id: 1,
        category: "فراخ السلام",
        name: "فراخ شواية",
        description: "فراخ شواية طازجة ومتبلة بأفضل البهارات الشرقية",
        image: "item1.jpg",
        sizes: [
            { name: "ربع", price: 90 },
            { name: "نص", price: 180 },
            { name: "فرخة", price: 360 }
        ]
    },
    {
        id: 2,
        category: "فراخ السلام",
        name: "فراخ مشوية علي الفحم",
        description: "فراخ مشوية على الفحم الحقيقي بمذاق مدخن شهي",
        image: "item2.jpg",
        sizes: [
            { name: "ربع", price: 90 },
            { name: "نص", price: 180 },
            { name: "فرخة", price: 360 }
        ]
    },
    {
        id: 3,
        category: "فراخ السلام",
        name: "فراخ شيش",
        description: "فراخ شيش طرية ومتبلة بعناية فائقة",
        image: "item3.jpg",
        sizes: [
            { name: "ربع", price: 90 },
            { name: "نص", price: 180 },
            { name: "فرخة", price: 360 }
        ]
    },
    {
        id: 4,
        category: "فراخ السلام",
        name: "فراخ شيش طاووق",
        description: "أقطع دجاج طرية ومتبلة ومهيئة للشيش طاووق",
        image: "item4.jpg",
        sizes: [
            { name: "ربع", price: 115 },
            { name: "نص", price: 230 },
            { name: "فرخة", price: 460 }
        ]
    },
    {
        id: 5,
        category: "فراخ السلام",
        name: "فراخ بانية",
        description: "صدور دجاج بانية مقرمشة ومتبلة بخلطة السلام الخاصة",
        image: "item5.jpg",
        sizes: [
            { name: "ربع", price: 115 },
            { name: "نص", price: 230 },
            { name: "فرخة", price: 460 }
        ]
    },
    {
        id: 6,
        category: "فراخ السلام",
        name: "فراخ محشية",
        description: "فراخ محشية بالخلطة المصرية الأصيلة",
        image: "item6.jpg",
        sizes: [
            { name: "ربع", price: 115 },
            { name: "نص", price: 230 },
            { name: "فرخة", price: 460 }
        ]
    },

    // القسم الثاني: صواني السلام
    {
        id: 7,
        category: "صواني السلام",
        name: "صنية السلام",
        description: "كيلوا كفتة + فرخة ونصف شيش + 3 ربع كباب + ربع طرب + 3 معمر + 2 ملوخيه",
        image: "item7.jpg",
        sizes: [
            { name: "صنية كاملة", price: 2400 }
        ]
    },
    {
        id: 8,
        category: "صواني السلام",
        name: "صنيه العيلة",
        description: "نص كفته + فرخه شيش + ثلث كباب + ربع طرب + 2 معمر + 2 ملوخيه",
        image: "item8.jpg",
        sizes: [
            { name: "صنية كاملة", price: 1450 }
        ]
    },
    {
        id: 9,
        category: "صواني السلام",
        name: "صنيه الصحاب",
        description: "نص فرخه + نص كفته + نص كباب + ربع طرب + ربع شيش + 2 معمر + 2 ملوخيه",
        image: "item9.jpg",
        sizes: [
            { name: "صنية كاملة", price: 1450 }
        ]
    },
    {
        id: 10,
        category: "صواني السلام",
        name: "صينيه 999",
        description: "نص فرخه+ربع كفته+ربع كباب+ربع طرب+ 3 معمر او بسمتي +1 ملوخيه",
        image: "item10.jpg",
        sizes: [
            { name: "صنية كاملة", price: 999 }
        ]
    },

    // القسم الثالث: المشروبات
    {
        id: 11,
        category: "المشروبات",
        name: "مياه معدنيه صغيره",
        description: "زجاجة مياه معدنية حجم صغير منعشة",
        image: "item11.jpg",
        sizes: [
            { name: "زجاجة", price: 10 }
        ]
    },
    {
        id: 12,
        category: "المشروبات",
        name: "مياه معدنيه كبيره",
        description: "زجاجة مياه معدنية حجم كبير",
        image: "item12.jpg",
        sizes: [
            { name: "زجاجة", price: 15 }
        ]
    },
    {
        id: 13,
        category: "المشروبات",
        name: "كانز بيبسي",
        description: "مشروب غازي بيبسي بارد",
        image: "item13.jpg",
        sizes: [
            { name: "كانز", price: 25 }
        ]
    },
    {
        id: 14,
        category: "المشروبات",
        name: "لتر بيبسي",
        description: "عبوة بيبسي حجم لتر",
        image: "item14.jpg",
        sizes: [
            { name: "لتر", price: 45 }
        ]
    },
    {
        id: 15,
        category: "المشروبات",
        name: "2 لتر بيبسي",
        description: "عبوة بيبسي عائلية حجم 2 لتر",
        image: "item15.jpg",
        sizes: [
            { name: "2 لتر", price: 55 }
        ]
    },

    // القسم الرابع: كريب السلام
    {
        id: 16,
        category: "كريب السلام",
        name: "كريب بطاطس",
        description: "كريب محشو بطاطس مقرمشة وصوصات",
        image: "item16.jpg",
        sizes: [
            { name: "عادي", price: 70 }
        ]
    },
    {
        id: 17,
        category: "كريب السلام",
        name: "كريب برجر",
        description: "كريب محشو قطع برجر غنية",
        image: "item17.jpg",
        sizes: [
            { name: "عادي", price: 100 }
        ]
    },
    {
        id: 18,
        category: "كريب السلام",
        name: "كريب موزاريلا",
        description: "كريب بجبنة الموتزاريلا السائحة",
        image: "item18.jpg",
        sizes: [
            { name: "عادي", price: 80 }
        ]
    },
    {
        id: 19,
        category: "كريب السلام",
        name: "كريب كرسبي بطاطس",
        description: "تشكيلة كرسبي مقرمش مع بطاطس",
        image: "item19.jpg",
        sizes: [
            { name: "عادي", price: 90 }
        ]
    },
    {
        id: 20,
        category: "كريب السلام",
        name: "كريب كرسبي",
        description: "كريب قطع دجاج كرسبي مقرمشة",
        image: "item20.jpg",
        sizes: [
            { name: "عادي", price: 110 }
        ]
    },
    {
        id: 21,
        category: "كريب السلام",
        name: "كريب زنجر",
        description: "كريب دجاج زنجر حار ومقرمش",
        image: "item21.jpg",
        sizes: [
            { name: "عادي", price: 110 }
        ]
    },
    {
        id: 22,
        category: "كريب السلام",
        name: "كريب فاهيتا",
        description: "كريب دجاج فاهيتا بالخضار والبهارات",
        image: "item22.jpg",
        sizes: [
            { name: "عادي", price: 130 }
        ]
    },
    {
        id: 23,
        category: "كريب السلام",
        name: "كريب شيش",
        description: "كريب شيش طاووق طري ومميز",
        image: "item23.jpg",
        sizes: [
            { name: "عادي", price: 120 }
        ]
    },
    {
        id: 24,
        category: "كريب السلام",
        name: "سوبر كرانشي",
        description: "كريب سوبر كرانشي غني ومقرمش",
        image: "item24.jpg",
        sizes: [
            { name: "عادي", price: 130 }
        ]
    },
    {
        id: 25,
        category: "كريب السلام",
        name: "شاورما فراخ",
        description: "كريب شاورما فراخ على الطريقة الخاصة",
        image: "item25.jpg",
        sizes: [
            { name: "عادي", price: 120 }
        ]
    },
    {
        id: 26,
        category: "كريب السلام",
        name: "ميكس فراخ",
        description: "كريب تشكيلة ميكس فراخ متنوعة",
        image: "item26.jpg",
        sizes: [
            { name: "عادي", price: 130 }
        ]
    },
    {
        id: 27,
        category: "كريب السلام",
        name: "كفته",
        description: "كريب أصابع الكفته المشوية",
        image: "item27.jpg",
        sizes: [
            { name: "عادي", price: 120 }
        ]
    },
    {
        id: 28,
        category: "كريب السلام",
        name: "نوتيلا",
        description: "كريب شوكولاتة نوتيلا حلو",
        image: "item28.jpg",
        sizes: [
            { name: "عادي", price: 60 }
        ]
    },
    {
        id: 29,
        category: "كريب السلام",
        name: "كريب سجق",
        description: "كريب سجق شرقي متبل",
        image: "item29.jpg",
        sizes: [
            { name: "عادي", price: 115 }
        ]
    },
    {
        id: 30,
        category: "كريب السلام",
        name: "ميكس جبن",
        description: "كريب تشكيلة جبن غنية ولذيذة",
        image: "item30.jpg",
        sizes: [
            { name: "عادي", price: 100 }
        ]
    },
    {
        id: 31,
        category: "كريب السلام",
        name: "كريب السلام",
        description: "كريب السلام الملكي الخاص",
        image: "item31.jpg",
        sizes: [
            { name: "عادي", price: 140 }
        ]
    },
    {
        id: 32,
        category: "كريب السلام",
        name: "كريب كبده",
        description: "كريب كبدة اسكندراني مميزة",
        image: "item32.jpg",
        sizes: [
            { name: "عادي", price: 90 }
        ]
    },
    {
        id: 33,
        category: "كريب السلام",
        name: "كريب ستربس",
        description: "كريب أصابع ستربس دجاج مقرمشة",
        image: "item33.jpg",
        sizes: [
            { name: "عادي", price: 110 }
        ]
    },

    // القسم الخامس: الإضافات
    {
        id: 34,
        category: "الإضافات",
        name: "موتزاريلا",
        description: "إضافة جبنة موتزاريلا إضافية",
        image: "item34.jpg",
        sizes: [
            { name: "إضافة", price: 20 }
        ]
    },
    {
        id: 35,
        category: "الإضافات",
        name: "بطاطس",
        description: "إضافة بطاطس مقلية",
        image: "item35.jpg",
        sizes: [
            { name: "إضافة", price: 20 }
        ]
    },
    {
        id: 36,
        category: "الإضافات",
        name: "طبق بطاطس",
        description: "طبق بطاطس مقلية ذهبية مقرمشة",
        image: "item36.jpg",
        sizes: [
            { name: "طبق", price: 35 }
        ]
    },

    // القسم السادس: وجبات السلام
    {
        id: 37,
        category: "وجبات السلام",
        name: "وجبه فراخ مع ارز",
        description: "ربع فراخ شيش او تكه ورز شعريه وعيش وطحينه ومخلل",
        image: "item37.jpg",
        sizes: [
            { name: "وجبة", price: 120 }
        ]
    },
    {
        id: 38,
        category: "وجبات السلام",
        name: "وجبه ربع فراخ على الفحم",
        description: "ربع فراخ شيش او تكه وارز بشعريه وخضار",
        image: "item38.jpg",
        sizes: [
            { name: "وجبة", price: 145 }
        ]
    },
    {
        id: 39,
        category: "وجبات السلام",
        name: "وجبه ربع فراخ شوايه",
        description: "ربع فراخ شوايه ورز شعريه وخضار مشكل وعيش وطحينه ومخلل",
        image: "item39.jpg",
        sizes: [
            { name: "وجبة", price: 145 }
        ]
    },
    {
        id: 40,
        category: "وجبات السلام",
        name: "وجبه نص فراخ",
        description: "نص فراخ شيش او تكه ارز بشعريه وخضار وعيش وطحينه ومخلل",
        image: "item40.jpg",
        sizes: [
            { name: "وجبة", price: 235 }
        ]
    },
    {
        id: 41,
        category: "وجبات السلام",
        name: "وجبه السلام",
        description: "ربع فراخ وثمن كفته ورز بسمتي ويعيش وطحينه ومخلل",
        image: "item41.jpg",
        sizes: [
            { name: "وجبة", price: 200 }
        ]
    },
    {
        id: 42,
        category: "وجبات السلام",
        name: "وجبه ميكس",
        description: "ربع فراخ واثنين صابع كفته واثنين صابع ضرب وقطعه كباب ورز بسمتي بوم فريت عيش وطحينه ومخلل",
        image: "item42.jpg",
        sizes: [
            { name: "وجبة", price: 400 }
        ]
    },
    {
        id: 43,
        category: "وجبات السلام",
        name: "وجبه الشباب",
        description: "ربع مشوي وراك وارز بسمتي وبطاطس وعيش ومخلل وطحينه",
        image: "item43.jpg",
        sizes: [
            { name: "وجبة", price: 135 }
        ]
    },
    {
        id: 44,
        category: "وجبات السلام",
        name: "وجبه كرسبي",
        description: "ثلاث قطع كرسبي وبسمتي وبطاطس وتوميه وعيش ومخلل",
        image: "item44.jpg",
        sizes: [
            { name: "وجبة", price: 175 }
        ]
    },
    {
        id: 45,
        category: "وجبات السلام",
        name: "وجبه حمام",
        description: "فرد حمام وثمن كفته وربع فرخه وارز شعريه وبطاطس وعيش وطحينه ومخلل",
        image: "item45.jpg",
        sizes: [
            { name: "وجبة", price: 395 }
        ]
    },

    // القسم السابع: مكرونات السلام
    {
        id: 46,
        category: "مكرونات السلام",
        name: "مكرونه بالفراخ",
        description: "مكرونة لذيذة بقطع الدجاج الشهية",
        image: "item46.jpg",
        sizes: [
            { name: "طبق", price: 60 }
        ]
    },
    {
        id: 47,
        category: "مكرونات السلام",
        name: "مكرونه بالكبده",
        description: "مكرونة بقطع الكبدة الاسكندراني",
        image: "item47.jpg",
        sizes: [
            { name: "طبق", price: 60 }
        ]
    },
    {
        id: 48,
        category: "مكرونات السلام",
        name: "مكرونه باللحمه",
        description: "مكرونة باللحمة المفرومة أو القطع",
        image: "item48.jpg",
        sizes: [
            { name: "طبق", price: 60 }
        ]
    },
    {
        id: 49,
        category: "مكرونات السلام",
        name: "مكرونه بشاميل",
        description: "طاجن مكرونة بشاميل باللحمة المفرومة",
        image: "item49.jpg",
        sizes: [
            { name: "طبق", price: 70 }
        ]
    },
    {
        id: 50,
        category: "مكرونات السلام",
        name: "مكرونه نجرسكو",
        description: "مكرونة نجرسكو بالفراخ والبشاميل والجبنة",
        image: "item50.jpg",
        sizes: [
            { name: "طبق", price: 70 }
        ]
    },

    // القسم الثامن: كبابجي السلام
    {
        id: 51,
        category: "كبابجي السلام",
        name: "كباب ضاني",
        description: "كباب ضاني بلدي طازج ومشوي على الفحم",
        image: "item51.jpg",
        sizes: [
            { name: "ربع", price: 300 },
            { name: "ثلث", price: 400 },
            { name: "نص", price: 600 },
            { name: "كيلو", price: 1200 }
        ]
    },
    {
        id: 52,
        category: "كبابجي السلام",
        name: "ريش ضاني",
        description: "ريش ضاني مشوية بتتبيلة السلام الخاصة",
        image: "item52.jpg",
        sizes: [
            { name: "ثلث", price: 450 },
            { name: "نص", price: 650 },
            { name: "كيلو", price: 1300 }
        ]
    },
    {
        id: 53,
        category: "كبابجي السلام",
        name: "مشكل كباب وكفته",
        description: "مشكلة لذيذة من كباب وكفته مشوية",
        image: "item53.jpg",
        sizes: [
            { name: "ربع", price: 215 },
            { name: "ثلث", price: 285 },
            { name: "نص", price: 425 },
            { name: "كيلو", price: 850 }
        ]
    },
    {
        id: 54,
        category: "كبابجي السلام",
        name: "طرب ضاني",
        description: "طرب ضاني محشو كفته ومغلف بالمنديل",
        image: "item54.jpg",
        sizes: [
            { name: "ربع", price: 240 },
            { name: "ثلث", price: 320 },
            { name: "نص", price: 475 },
            { name: "كيلو", price: 950 }
        ]
    },
    {
        id: 55,
        category: "كبابجي السلام",
        name: "كفته كندوز",
        description: "كفته لحم كندوز بلدي مشوية على الفحم",
        image: "item55.jpg",
        sizes: [
            { name: "ربع", price: 130 },
            { name: "ثلث", price: 195 },
            { name: "نص", price: 260 },
            { name: "كيلو", price: 520 }
        ]
    },
    {
        id: 56,
        category: "كبابجي السلام",
        name: "كبده اسكندراني",
        description: "كبدة اسكندراني بالثوم والبهارات والفلفل",
        image: "item56.jpg",
        sizes: [
            { name: "ربع", price: 85 },
            { name: "نص", price: 170 },
            { name: "كيلو", price: 340 }
        ]
    },
    {
        id: 57,
        category: "كبابجي السلام",
        name: "كباب بتلو",
        description: "كباب بتلو طري ومميز",
        image: "item57.jpg",
        sizes: [
            { name: "ربع", price: 275 },
            { name: "ثلث", price: 370 },
            { name: "نص", price: 550 },
            { name: "كيلو", price: 1100 }
        ]
    },
    {
        id: 58,
        category: "كبابجي السلام",
        name: "موزه ضاني فحم",
        description: "موزة ضاني مشوية على الفحم",
        image: "item58.jpg",
        sizes: [
            { name: "كيلو", price: 600 }
        ]
    },
    {
        id: 59,
        category: "كبابجي السلام",
        name: "موزه ضاني بالفته",
        description: "موزة ضاني تقدم مع فتة السلام المصرية",
        image: "item59.jpg",
        sizes: [
            { name: "كيلو", price: 650 }
        ]
    },
    {
        id: 60,
        category: "كبابجي السلام",
        name: "موزه بتلو",
        description: "موزة بتلو طرية ومطهوة بعناية",
        image: "item60.jpg",
        sizes: [
            { name: "كيلو", price: 550 }
        ]
    },
    {
        id: 61,
        category: "كبابجي السلام",
        name: "فرد حمام محشي",
        description: "فرد حمام محشي أرز أو فريك",
        image: "item61.jpg",
        sizes: [
            { name: "فرد", price: 195 }
        ]
    },

    // القسم التاسع: طبق السلام
    {
        id: 62,
        category: "طبق السلام",
        name: "طاجن لحمه بالخضار مع ارز بالشعريه",
        description: "طاجن لحمة بالخضار الطازج مع أرز بالشعرية",
        image: "item62.jpg",
        sizes: [
            { name: "طاجن", price: 270 }
        ]
    },
    {
        id: 63,
        category: "طبق السلام",
        name: "طاجن عكاوي مع ارز بالشعريه",
        description: "طاجن عكاوي فاخر مع أرز بالشعرية",
        image: "item63.jpg",
        sizes: [
            { name: "طاجن", price: 270 }
        ]
    },
    {
        id: 64,
        category: "طبق السلام",
        name: "طاجن كباب حله مع رز",
        description: "طاجن كباب حلة بالبصل المكرمل مع الأرز",
        image: "item64.jpg",
        sizes: [
            { name: "طاجن", price: 270 }
        ]
    },
    {
        id: 65,
        category: "طبق السلام",
        name: "ارز معمر بالكبده",
        description: "أرز معمر بالفرن مع قطع الكبدة",
        image: "item65.jpg",
        sizes: [
            { name: "طبق", price: 80 }
        ]
    },
    {
        id: 66,
        category: "طبق السلام",
        name: "ارز معمر",
        description: "أرز معمر بالفلاحي والقشطة في الطاجن",
        image: "item66.jpg",
        sizes: [
            { name: "طبق", price: 50 }
        ]
    },
    {
        id: 67,
        category: "طبق السلام",
        name: "ارز بسمتي",
        description: "أرز بسمتي مفلفل بالبهارات",
        image: "item67.jpg",
        sizes: [
            { name: "طبق", price: 45 }
        ]
    },
    {
        id: 68,
        category: "طبق السلام",
        name: "ارز بسمتي بالكبده",
        description: "أرز بسمتي مزين بقطع الكبدة",
        image: "item68.jpg",
        sizes: [
            { name: "طبق", price: 75 }
        ]
    },
    {
        id: 69,
        category: "طبق السلام",
        name: "ارز شعريه",
        description: "أرز بالشعرية محمر ومصري أصيل",
        image: "item69.jpg",
        sizes: [
            { name: "طبق", price: 30 }
        ]
    },
    {
        id: 70,
        category: "طبق السلام",
        name: "ارز شعريه بالكبده",
        description: "أرز بالشعرية مع قطع الكبدة اللذيذة",
        image: "item70.jpg",
        sizes: [
            { name: "طبق", price: 60 }
        ]
    },
    {
        id: 71,
        category: "طبق السلام",
        name: "خضار مشكل",
        description: "طبق خضار طازج ومطهو بالمرقة",
        image: "item71.jpg",
        sizes: [
            { name: "طبق", price: 30 }
        ]
    },
    {
        id: 72,
        category: "طبق السلام",
        name: "طبق فاصوليا",
        description: "طبق فاصوليا بالصلصة الحمراء الطازجة",
        image: "item72.jpg",
        sizes: [
            { name: "طبق", price: 30 }
        ]
    },
    {
        id: 73,
        category: "طبق السلام",
        name: "طبق ملوخيه",
        description: "طبق ملوخية خضراء بالتشة المصرية",
        image: "item73.jpg",
        sizes: [
            { name: "طبق", price: 40 }
        ]
    },
    {
        id: 74,
        category: "طبق السلام",
        name: "شوربه لسان عصفور",
        description: "شوربة لسان عصفور ساخنة ودافئة",
        image: "item74.jpg",
        sizes: [
            { name: "طبق", price: 20 }
  
