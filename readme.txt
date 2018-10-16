=== Db Cf7 Cpt ===
Contributor: daniilborovkov
Donate link: paypal.me/borovkovdaniil
Tags: contact-form-7, extension
Requires at least: 4.5
Tested up to: 4.9.8
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

== Description ==

После установки плагина в поле добавления формы прописывать конструкцию вида:

```
[db_taxonomies_select name class:form-control id:category]
[db_cpt_select name class:form-control id:post]
```

где
*name* - аттрибут name (обязателен для заполнения),
*class:form-control* - аттрибут class,
*id:category|post* - аттрибут id, причем *category* - slug таксономии, а post - slug записи (обязательно для заполнения для корректной работы плагина).

*db_taxonomies_select* генерирует выбор таксономии, *db_cpt_select* - выбор поста.

пример для поля 

```
<label> Ваше имя (обязательно)
    [text* your-name] </label>

<label> Ваш e-mail (обязательно)
    [email* your-email] </label>

[db_taxonomies_select retreat class:form-control id:category]

[db_cpt_select dpt class:form-control id:post]

[submit "Отправить"]
```


== Installation ==

Установка стандартная. После активации просто добавлять шорткоды.

== Changelog ==

= 1.0 =
* Возможность добавлять селекты и подгружать посты динамически.
