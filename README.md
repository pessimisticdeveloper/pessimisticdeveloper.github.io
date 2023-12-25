# Simeranya Framework

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

Simeranya Şirketinin Geliştirmiş olduğu Python Django üzerinde 
koşan web framework'unun kullanım kılavuzudur.

---
- Hazırlayan: Simeranya Software Developer Ekibi
---

## Projeyi Yükleme ve Gitlab'tan Clone Etme

---
- Git Yükleme:
Bilgisayarınızda Git yüklü değilse, Git'in resmi web sitesinden Git'i indirip yükleyebilirsiniz.

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- GitLab Projesini Clone Etme:
GitLab'da ilgili projenin sayfasına gidin ve projenin sağ üst köşesindeki "Clone" butonuna tıklayın. Açılan menüden, projeyi HTTPS veya SSH ile clone etmek için kullanabileceğiniz URL'yi seçin.

- Eğer HTTPS kullanacaksanız:
```bash 
  git clone https://username@gitlab.com/username/project.git
```
- Eğer SSH kullanacaksanız:
```bash 
  git clone git@gitlab.com:username/project.git
```
- Burada username ve project kısmını kendi GitLab kullanıcı adınız ve proje adınız ile değiştirmelisiniz.
- Terminal veya Komut İstemcisini Kullanma: Klonlama işlemini gerçekleştirdikten sonra, terminal veya cmd açın. Clone ettiğiniz dizine gidin:
```bash 
  cd project
```
---

## Database Ayarları

---
![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
- Proje dosyalarının içinde olan .env dosyasında database ayarları vardır. "DATABASE_URL" kısmında sarı dikdörgen ile çevrili (username) kendi localinizdeki veritabanınızın kullanıcı adı diger (db_password) kısmı ise veritabanı şifreniz neyse onu ona göre değiştirin. sarı kare (staff) alan ise veritabanınızın ismidir. Bunlara dikkat ediniz.
---

## Çalıştırma ve Sanal Ortam


![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
---
- Şimdi ise sanal ortam nasıl kurulur ?

```bash
  python -m venv staf_venv
```
- Sanal Ortamı Aktifleştirme (Windows)

```bash
  staf_venv\Scripts\activate
```
- Sanal Ortamı Aktifleştirme (Lunix & MacOS)

```bash
  source staf_venv/bin/activate
```
- Bağımlılıkları(libary) Yükleme: Sanal ortamı aktifleştirdikten sonra, projenizin bağımlılıklarını yükleyin. Genellikle bir requirements.txt dosyanız varsa, bu dosyayı kullanarak bağımlılıkları yükleyebilirsiniz

```bash
  pip install -r requirements.txt
```
- Sanal Ortamdan Çıkma: Projeyi çalıştırdıktan sonra sanal ortamdan çıkmak için

```bash
  deactivate
```
 --- 

 ## Admin Paneli & Menü Modeller
### Menü Model Oluşturma

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

(Yukarıda Gördüğünüz Admin Panelinde bizim frameworkumuz var.)

### BASE_OBJECT
base_object model her modelde kullanılır. framework'un en önemli Modelidir. Amacı ise log tutmak için.

### Menü Model
Menü oluşturmak için yuvarlak içindeki add+ kısmına basıyoruz. sağ tarafta bulunan ve yeşil kare içinde olan alanları bişey girmemize gerek yok çünkü o alanlar yukarıda bahsettiğim base_objectten geliyor.
#### Menu_Model Amaçları
---
1. dinamik url oluşturmak.
2. sayfayı ayağa kaldırmak
3. sayfanın amacı alt sayfamı yoksa alt sayfanın detay sayfasımı
---
### Root Menü Oluşturma

Root Menünün amacı = Oluşturduğumuz normal menüleri başlıklardırmaya yarar. Tıklanma özelliği yoktur.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

Root Menü oluşturmak için yapmamız gereken kırmızı alan içindeki 3 şeyi işaretlemek ve save butonu ile oluşturmak.

---
- "Is root menu" = Root menu olduğunu belirtmek için işaretliyoruz
- "Order" = Kaçıncı root menü olduğunu veriyoruz, örnek vermek gerekirde 1 demek sidebarda en üstte olsun demek.
- "Title" = Root menünün adını veriyoruz.
---
### Normal Menü Oluşturma

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png) 

Normal Menü oluşturmak için yapmamız gereken kırmızı alanları doldurmak, yeşil alanlar base_object'ten gelir. Menu modelin içindeki doldurmamız gereken kısımları ne işe yaradıklarını görtereceğim. Sonra save butonu basip menüyü oluşturmamız gerekiyor. Aşağıda doldurmamız gereken alanlar şu şekilde.

---
- "Title" = oluşturduğumuz menünün ismi. örnek: Users
- "Url name" = oluşturduğumuz menünün html ismi, örnek: path('', views.users, name="users")
- "Url view location" = oluşturduğumuz menünün gideceği html ve html sayfasına hangi vverilerin göndereceğini söyleyen app icindeki views dosyasında oluşturduğumuz fonksiyon. örnek:
![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
- "Is view" = json response ve djangonun class view fonsiyonları olduğu için bunu kullanıyoruz.
- "Url" = search yaparken kullanılır title direk kendisini alır örnek: 127.0.0.1:8000/users/
- "Icon code" = Menülerin iconları: örnek : si si-user-user
- "Show header" = üsteki save, new copy butonlarının gelmesi gerektiğini söylüyor. veri alacağımız sayfalarda kullanırız. coğunluk detay sayfalarında kullanırız.
- "Permission" = klasik izinler örnek: user | user | can view user
- "Menu documentations text" = Geliştiricinin notu diyebiliriz bu kısma.
- "Is detail" = detay sayfası ise işaretlenir.
- "top url" = detay sayfası olamdığı için işaretlenmez detay sayfası olsaydı geldiği anasayfa seçilirdi.
- "new action url" = save ettikden sonra gideceği yeri seçiyoruz.
- "new creation object" = Anasayfadan detay sayfasına giderse işaretleriz.
- "top content type id" = bu sayfa hangi modele bağlı olduğu gösteririz örnek:user & 9
![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
- "delete, save ve copy " = bu sayfada bu butonları kullanmak istiyormusun istiyorsan işaretlenir. coğunlukla detay sayfaların kullanılır bunlar.
---
## Menu Relations
Menü Relations Amacı: Oluşturduğumuz menülerin sidebarda nasıl konumlandığını göstermek ve hangi menü sayfalarının sıralamasını belirlemek için kullanırız.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

Bizi ilgidiren kısımlar parent,sub ve order diğer alanlar base_object modelinden geliyor. Root menü ise bu anlanları işaretmek gerekmez.

---
- "parent" = bu alan bize bu oluşturduğumuz menu hangi menünün altında olsun. (Eğer bu menü root menü ise şeçmeyiz)
- "Sub" = bu alanda ise olustuduğumuz menüyü seçiyoruz.
- "order" = bu alanda ise sidebar menümüzün hangi sırada olması gerektiğini şeciyoruz. (Eğer bu menü root menü ise şeçmeyiz)
---

### Menü kısımlarını Save Ettikten Sonra LOGOUT Yapıp Ve Projeyi Yeniden Runserver(Çalıştırmak) Gerekiyor...

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png) 

Görünüm olarak bu skilde gözükür. (yeşil renkli kare root menüye örnek kırmızı renkli alan ise oluşturduğumuz menü).

## HTML Items Üretme

Htlm ıtems üretmek için ilk önce Base_object modeli altında olan Field choices groupss modelinin ekle(add) butonuna basıp html items'nin name(ismini) yazıyoruz. Doldurmamız gereken alan sadece name kısmı, yeşil alan base_object'ten geliyor çünkü örnek:

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

Field choices groupss ismini kaydettikten(save) sonra Field choices modeline eklememiz gerekiyor.

Field choices groups'un amacı: Veriyi gruplandırmaya yarar.

---
- "Group" = Field choices group'ta oluşturduğumuz items'ı seçiyoruz.
- "View name" = Sayfada görünen kısımdır.
- "Absolute Value" = yakında açıklanacak.
- "Value en" = Yakında açıklanacak.
---

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

html items ve özellikleri burada seçiyoruz yeşil bölüm base_object'ten geldiği için girmiyoruz. girilmesi gereken yerler ve açıklaması.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
---
- "View name" = buradan oluşturduğuz field'i seçiyoruz.
- "Hint" = Kullanım gerektirmez.
- "Menu" = bu html items hangi sayfada kullanacaksın. (Users-Detail Sayfası)
- "Input name" = girilen inputun ismi
- "Inout id" = girilen inputun id'si
- "Input Type" = girilen datanın tipini söylüyoruz.
- "Label class" = label html tag'e class buradan eklenir.
- "Input class" = input html tag'e class buradan eklenir.
- "Data type" = girilen datanın tipi.
- "Input max length" = girilen datanın en uzun karakter olması gerekiyor.
- "Input min length" = girilen datanın en az kac karakter olması gerekiyor.
- "Required" = Alanın doldurmak zorunlu.
- "Order" = Alanı hangi sırada görmek istiyorsun.
- "Is active" = Şuan html itmes aktif mi.
- "For save" = html items'daki alanı kaydetmek istiyormusun.
- "Other input attr" = HTML İtems farklı bir type ise ekstra eklenir.javascript eklemek içinde kullanılır.
- "Parent item" = select olduğu zaman optionslarda kullanılır.
- "Is sub instance" = Tek sayfada bağlı modelleri kullanırken kullanılır.
- "Sub field name" = özel fonksiyonları çağırmak için kullanılır.
- "Content model" = HTML İtems'in tutacağı modelin id'si.
- "Parent content model" = foreingkey olan modellerde kullanılır.
- "Label item field name" = Modelin artındaki özel fonksiyonları çağırmak için.
- "Content filter" = fields choices gruplara ayırıp getirmek için kullanılır.
- "Content order by" = content'in kaçıncı numarada geleceğini gösterir.
---
HTML Items ürettik şimdi yapmamız gereken HTML Items kullanacağımız Detay Menü ve Detay Sayfası oluşturmak...

## Detay Menüsü Oluşturma

Detay Menü oluşturmak için yapmamız gereken kırmızı alanları doldurmak, yeşil alanlar base_object'ten gelir. Menu modelin içindeki doldurmamız gereken kısımları ne işe yaradıklarını görtereceğim aşağıda doldurmamız gereken alanlar şu şekilde.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

## Detay Menü Relations
---
- "Parent" = Users menüsünün altında konumlandırılsın.
- "Sub" = Menünün kendisini seçiyoruz.
- "Order" = Menünün kaçıncı sırada olması gerektiğini seçiyoruz.
---

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

---
- "Title" = oluşturduğumuz menünün ismi. örnek: Users-Detail
- "Url name" = oluşturduğumuz menünün html ismi, örnek: path('', views.users, name="Users-detail")
- "Url view location" = oluşturduğumuz menünün gideceği html ve html sayfasına hangi vverilerin göndereceğini söyleyen app icindeki views dosyasında oluşturduğumuz fonksiyon. örnek:
![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)
- "Is view" = json response ve djangonun class view fonsiyonları olduğu için bunu kullanıyoruz.
- "Url" = search yaparken kullanılır title direk kendisini alır örnek: 127.0.0.1:8000/user-detail/
- "Icon code" = Menülerin iconları: örnek : si si-user-user
- "Show header" = üsteki save, new copy butonlarının gelmesi gerektiğini söylüyor. veri alacağımız sayfalarda kullanırız. coğunluk detay sayfalarında kullanırız.(burada veri alacağımız için bunu işaretliyoruz.)
- "Permission" = klasik izinler örnek: user | user | can view user
- "Menu documentations text" = Geliştiricinin notu diyebiliriz bu kısma.
- "Is detail" = detay sayfası ise işaretlenir. (detay sayfası olduğu için işaretlenir.)
- "top url" = boş bırakabiliriz.
- "After action url" = save ettikden sonra gideceği yeri seçiyoruz.(yani Users anasayfa olur.)
- "new creation object" = Anasayfadan detay sayfasına giderse işaretleriz.
- "top content type id" = bu sayfa hangi modele bağlı olduğu gösteririz örnek:user & 9
- "delete, save ve copy " = bu sayfada bu butonları kullanmak istiyormusun istiyorsan işaretlenir. coğunlukla detay sayfaların kullanılır. yani bu sayfada kullanılır.
---

Görünüm olarak bu şekilde gözükür. (Bu sayfada veri alacağımız için show header bulunur.) 

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

Şimdi ise HTML sayfasına nasıl entegre ettimize bakalım.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

## Tiplerine göre HTML Items
### Type Date Olan
Date tipi bir html items eklerken sadece
"Other input attr" kısmına type="date" yazmamız yeterli. ikinci fotoda yeşil renkli kare içindeki alan.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

Şimdi ise HTML sayfasına nasıl entegre ettimize bakalım.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

HTML Sayfasında böyle gözükecektir.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

### Type Datetime Olan
Datetime tipi bir html items eklerken sadece "Other input attr" kısmına type="datetime-local" yazmamız yeterli.(Yukarıdaki örnekten faydalanabilirsiniz.)

HTML Sayfasında bu şekilde gözükecektir.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

### Type bool Olan
Bu gibi değerlerin iki çıktısı vardır onun için burada checkbox kullanırız. checkbox Html item oluşturmak için adımları izleyin açıklamasını ilk örnek yaptığım için sadece olmayanlara açıklayacağım.

Kırmızı alanda gördüğünüz yerleri değiştiriyoruz.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

HTML kodu ve sayfa görünümü aşağıdaki gibidir.

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

![Uygulama Ekran Görüntüsü](https://i.ibb.co/98qxWrV/db-ayar.png)

 
