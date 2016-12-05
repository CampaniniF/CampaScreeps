/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-main/main.nls.ru",{"vs/base/common/json":["Недопустимый символ","Недопустимый числовой формат","Требуется имя свойства","Требуется значение","Требуется двоеточие","Требуется запятая","Требуется закрывающая фигурная скобка","Требуется закрывающая квадратная скобка","Ожидается конец файла"],"vs/base/common/keybinding":["Клавиша Windows","CTRL","SHIFT","ALT","COMMAND","Клавиша Windows","CTRL","SHIFT","ALT","COMMAND","Клавиша Windows"],"vs/base/common/severity":["Ошибка","Предупреждение","Сведения"],"vs/code/electron-main/main":["Новое окно","Открывает новое окно","{0} {1}"],"vs/code/electron-main/menus":["&&Файл","&&Изменить","&&Просмотреть","&&Перейти","Окно","&&Справка","&&Новое окно","О программе {0}","Скрыть {0}","Скрыть другие","Показать все","Выйти из {0}","&&Новый файл","&&Новый файл","&&Открыть...","Открыть &&папку...","&&Открыть файл...","&&Открыть файл...","Открыть &&последние","&&Сохранить","Сохранить &&как...","Сохранить &&все","Автосохранение","&&Новое окно","Отменить &&изменения в файле","Закрыть &&окно","Закрыть &&папку","Закрыть &&редактор","В&&ыход","&&Параметры пользователя","&&Параметры рабочей области","&&Сочетания клавиш","&&Фрагменты пользователя","Цветовая &&тема","Тема значка &&файла","&&Параметры","&&Повторно открыть закрытый редактор","&&Очистить элементы","&&Отменить","&&Повторить","&&Вырезать","&&Копировать","&&Вставить","&&Выделить все","&&Отменить","&&Повторить","&&Вырезать","&&Копировать","&&Вставить","&&Выделить все","&&Найти","&&Заменить","Найти в &&файлах","Заменить &&в файлах","Про&&водник","По&&иск","&&GIT","&&Отладка","Р&&асширения","&&Выходные данные","Ко&&нсоль отладки","&&Интегрированный терминал","&&Проблемы","&&Палитра команд...","Включить/выключить полно&&экранный режим","Показать/скрыть строку &&меню","Разделить &&редактор","Переключить &&структуру группы редакторов","Показать/скрыть &&боковую панель","&&Переместить боковую панель вправо","&&Переместить боковую панель влево","Показать/скрыть п&&анель","&&Скрыть строку состояния","&&Показать строку состояния","&&Включить/выключить перенос текста","Показать/&&скрыть символы пробелов","Переключить &&управляющие символы","&&Увеличить","У&&меньшить","&&Сбросить масштаб","&&Назад","&&Вперед","&&Следующий редактор","&&Предыдущий редактор","&&Следующий используемый редактор в группе","&&Предыдущий используемый редактор в группе","Переключить р&&едактор","&&Первая группа","&&Вторая группа","&&Третья группа","&&Следующая группа","&&Предыдущая группа","Переключить &&группу","Перейти к &&файлу...","Перейти к &&символу в файле...","Перейти к символу в &&рабочей области...","Перейти к &&определению","Перейти к &&строке...","Свернуть","Закрыть","Переместить все на передний план","&&Показать/скрыть средства разработчика","Специальные &&возможности","&&Сообщить о проблемах","&&Документация","&&Заметки о выпуске","С&&правочник по сочетаниям клавиш","Вступительные в&&идео","&&Присоединяйтесь к нам в Twitter","&&Поиск запросов функций","Просмотреть &&лицензию","&&Заявление о конфиденциальности","&&О программе","Перезапустить для обновления...","Идет проверка наличия обновлений...","Скачать доступное обновление","Скачивается обновление...","Идет установка обновления...","Проверить наличие обновлений...","\nВерсия {0}\nФиксация {1}\nДата {2}\nОболочка {3}\nОбработчик {4}\nNode {5}","OK"],"vs/code/electron-main/windows":["Вы по-прежнему можете получить доступ к строке меню, нажав клавишу **ALT**.","ОК","Путь не существует.",'Путь "{0}" больше не существует на диске.',"Специальные возможности","Открыть повторно","Подождать","Закрыть","Окно не отвечает","Вы можете повторно открыть окно, закрыть его или продолжить ожидание.","Открыть повторно","Закрыть","Сбой окна","Приносим извинения за неудобство! Вы можете повторно открыть окно, чтобы продолжить работу с того места, на котором остановились."],"vs/platform/configuration/common/configurationRegistry":["Добавляет параметры конфигурации.","Краткая сводка параметров. Эта метка будет использоваться в файле параметров в качестве разделяющего комментария.","Описание свойств конфигурации.","Если тип configuration.type задан, то он должен иметь значение object","configuration.title должно быть строкой","configuration.properties должно быть объектом"],"vs/platform/environment/node/argv":['Аргументы в режиме "--goto" должны быть в формате "ФАЙЛ(:СТРОКА(:СТОЛБЕЦ))".',"Открыть редактор несовпадений. Требуется указать два пути к файлам в качестве аргументов.","Открыть файл по пути, указанному в определенной строке и столбце (требуется добавить :line[:column] к пути).","Языковой стандарт, который следует использовать (например, en-US или zh-TW).","Принудительно запустить новый экземпляр Code.",'Запустите с включенной командой "Developer: Startup Performance".',"Принудительно открыть файл или папку в последнем активном окне.","Указывает каталог, в котором хранятся данные пользователей, используется в случае выполнения от имени привилегированного пользователя.",'Печать подробного вывода (подразумевает использование параметра "--wait").',"Дождаться закрытия окна, прежде чем вернуть результат.","Задайте корневой путь для расширений.","Перечислить существующие расширения.","Показать версии установленных расширений при указании параметра --list-extension.","Устанавливает расширение.","Удаляет расширение.","Отключить все установленные расширения.","Отключить аппаратное ускорение GPU.","Печать версии.","Распечатать данные об использовании.","Использование","параметры","пути","Параметры"],"vs/platform/extensions/common/extensionsRegistry":['Для расширений VS Code указывает версию VS Code, с которой совместимо расширение. Она не может быть задана как "*". Например, ^0.10.5 сообщает о совместимости с минимальной версией VS Code 0.10.5.',"Издатель расширения VS Code.","Отображаемое имя расширения, используемого в коллекции VS Code.","Категории, используемые коллекцией VS Code для классификации расширения.","Баннер, используемый в магазине VS Code.","Цвет баннера в заголовке страницы магазина VS Code.","Цветовая тема для шрифта, используемого в баннере.","Все публикации расширения VS Code, представленные этим пакетом.",'Добавляет метку "Предварительная версия" для расширения в Marketplace.',"События активации для расширения кода VS Code.","Массив эмблем, отображаемых на боковой панели страницы расширения Marketplace.","URL-адрес изображения эмблемы.","Ссылка на эмблему.","Описание эмблемы.","Зависимости от других расширений. Идентификатор расширения — всегда ${publisher}.${name}. Например: vscode.csharp.","Скрипт, выполняемый перед публикацией пакета в качестве расширения VS Code.","Путь к значку размером 128 x 128 пикселей."],"vs/platform/request/common/request":["HTTP","Используемый параметр прокси. Если он не задан, он будет взят из переменных среды http_proxy и https_proxy.","Должен ли сертификат прокси-сервера проверяться по списку предоставленных ЦС.",'Значение, отправляемое как заголовок "Proxy-Authorization" для каждого сетевого запроса.'],"vs/workbench/parts/git/electron-main/askpassService":["GIT"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7ba55c5860b152d999dda59393ca3ebeb1b5c85f/core/vs\code\electron-main\main.nls.ru.js.map