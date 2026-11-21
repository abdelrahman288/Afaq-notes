Afaq Notes - نشر على GitHub Pages
====================================
فولدرين، اختار واحد بس:

1) install-as-app/  : نسخة قابلة للتثبيت كتطبيق وتشتغل بدون نت (PWA).
2) web-only/        : نسخة ويب عادية بدون تثبيت ولا إعدادات أوفلاين.
                      مفيش حاجة بتتثبت على الجهاز، فمفيش حاجة تتمسح. مناسبة للأجهزة المقفولة (Knox/إدارة).

الخطوات:
- اعمل Repository جديد على GitHub.
- ارفع محتوى الفولدر اللي اخترته (index.html + باقي الملفات) في جذر المستودع.
- Settings > Pages > Deploy from branch > main > root.
- افتح الرابط https://USERNAME.github.io/REPO/

عند أي تحديث في نسخة install-as-app غيّر رقم afaq-v9 في sw.js (afaq-v10 ...).
