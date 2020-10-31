(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['components/button/button.component'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"button "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":31}}}) : helper)))
    + "\" type=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\">\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":12}}}) : helper)))
    + "\n</button>\n\n";
},"useData":true});
templates['components/chat/chat.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"chat__row\">\n                <span class=\"text text_color_medium chat__date\">\n                    "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"time") : depth0), depth0))
    + "\n                </span>\n            </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":38,"column":21}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"chat__row chat__row_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\">\n                    <div class=\"chat__msg chat__msg_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\">\n                        <p class=\"chat__text text text_msg\">\n                            "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"text") : depth0), depth0))
    + "\n                        </p>\n                        <div class=\"chat__meta\">\n                            <span class=\"chat__time text text_time text_color_medium text_right\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"time") : depth0), depth0))
    + "</span>\n                        </div>\n                    </div>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"chat\">\n    <header class=\"header chat__header\">\n        <div class=\"chat__user\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"authorAvatar") || (depth0 != null ? lookupProperty(depth0,"authorAvatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorAvatar","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":38}}}) : helper)))
    + "\" alt=\"Пользователь\" class=\"avatar avatar_small chat__avatar\"/>\n            <div class=\"chat-list__content\">\n                <h1 class=\"text text_bold text_author chat__author-name\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"authorName") || (depth0 != null ? lookupProperty(depth0,"authorName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorName","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":34}}}) : helper)))
    + "\n                </h1>\n                <p class=\"text text_color_medium chat__status\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"authorLastVisit") || (depth0 != null ? lookupProperty(depth0,"authorLastVisit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorLastVisit","hash":{},"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":39}}}) : helper)))
    + "\n                </p>\n            </div>\n        </div>\n        <button class=\"button button_rounded button_icon-only msg-form__submit\">\n            <img src=\"./images/icons/more.svg\"\n                 alt=\"Отправить\"/>\n        </button>\n    </header>\n\n    <div class=\"chat__window\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sessions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "\n    </div>\n    <form class=\"chat__form msg-form\" action=\"\" method=\"\">\n        <label class=\"file-picker msg-form__file-picker\">\n            <img src=\"./images/icons/file.svg\"\n                 alt=\"Загрузка файла\"/>\n            <input class=\"file-picker__input\" type=\"file\" name=\"file\"/>\n        </label>\n        <input class=\"msg-form__input\" type=\"text\" placeholder=\"Сообщение\" name=\"message\"/>\n        <button type=\"submit\" class=\"button button_primary button_rounded button_icon-only msg-form__submit\">\n            <img src=\"./images/icons/arrow_right.svg\"\n                 alt=\"Отправить\"/>\n        </button>\n    </form>\n\n</div>\n";
},"useData":true});
templates['components/chat-list/chat-list.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"chat-list__item\">\n            <a href=\"/chat.html\" class=\"chat-list__link\">\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"authorAvatar") || (depth0 != null ? lookupProperty(depth0,"authorAvatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorAvatar","hash":{},"data":data,"loc":{"start":{"line":5,"column":26},"end":{"line":5,"column":42}}}) : helper)))
    + "\" alt=\"Пользователь\" class=\"avatar chat-list__avatar\"/>\n                <div class=\"chat-list__content\">\n                    <h2 class=\"text text_bold text_author\">\n                        "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"authorName") : depth0), depth0))
    + "\n                    </h2>\n                    <p class=\"text text_msg text_color_medium chat-list__text-preview\">\n                        "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"msgPreview") : depth0), depth0))
    + "\n                    </p>\n                </div>\n                <div class=\"chat-list__meta\">\n                    <time class=\"text text_time text_color_medium\">\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":32}}}) : helper)))
    + "\n                    </time>\n                    <div class=\"badge badge_success chat-list__badge\">\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":19,"column":33}}}) : helper)))
    + "\n                    </div>\n                </div>\n            </a>\n\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"chat-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"chats") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":25,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['components/form/form.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <h1 class=\"heading form__heading heading_centered\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":59},"end":{"line":3,"column":68}}}) : helper)))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a class=\"link\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form action=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"action") : stack1), depth0))
    + "\" method=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"method") : stack1), depth0))
    + "\" class=\"form "
    + alias2(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":80},"end":{"line":1,"column":89}}}) : helper)))
    + "\" onSubmit=onSubmitHandler>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"form__body\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"formGroups") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"form__footer\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"button") || (depth0 != null ? lookupProperty(depth0,"button") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"button","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"backLink") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n</form>\n";
},"useData":true});
templates['components/form-group/form-group.component'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-group "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":32}}}) : helper)))
    + "\">\n    <label class=\"label label_secondary form-group_label\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"labelText") || (depth0 != null ? lookupProperty(depth0,"labelText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelText","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":21}}}) : helper)))
    + "\n        <input class=\"input form-group__input\"\n               type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":21},"end":{"line":5,"column":29}}}) : helper)))
    + "\"\n               placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":43}}}) : helper)))
    + "\"\n               name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":29}}}) : helper)))
    + "\"\n               onBlur=blurHandler\n               onFocus=focusHandler\n               onKeyup=keyupHandler\n        />\n    </label>\n    <span class=\"form-group__validation-feedback hidden\">\n        "
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"invalidMessage") : depth0), depth0))
    + "\n    </span>\n</div>\n";
},"useData":true});
templates['pages/chat/chat.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav nav_content-position_right sidebar__nav\">\n                <a href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n            <input class=\"search-bar sidebar__search-bar\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"searchBarPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchBarPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchBarPlaceholder","hash":{},"data":data,"loc":{"start":{"line":7,"column":71},"end":{"line":7,"column":95}}}) : helper)))
    + "\"/>\n        </header>\n        <div class=\"sidebar__content\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatList") || (depth0 != null ? lookupProperty(depth0,"chatList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatList","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </aside>\n    <main class=\"main main_centered-horizontal container__main\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chat") || (depth0 != null ? lookupProperty(depth0,"chat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chat","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n</div>\n";
},"useData":true});
templates['pages/chats/chats.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav nav_content-position_right sidebar__nav\">\n                <a href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n            <input class=\"search-bar sidebar__search-bar\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"searchBarPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchBarPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchBarPlaceholder","hash":{},"data":data,"loc":{"start":{"line":7,"column":71},"end":{"line":7,"column":95}}}) : helper)))
    + "\"/>\n        </header>\n        <div class=\"sidebar__content\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatList") || (depth0 != null ? lookupProperty(depth0,"chatList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatList","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </aside>\n    <main class=\"main main_centered container__main\">\n        <h1 class=\"text text_color_medium\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":43},"end":{"line":14,"column":52}}}) : helper)))
    + "</h1>\n    </main>\n</div>\n";
},"useData":true});
templates['pages/internal-error/internal-error.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <h1 class=\"heading heading_large\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":47}}}) : helper)))
    + "</h1>\n    <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":35}}}) : helper)))
    + "</p>\n    <a class=\"link\" href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backlink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n</div>\n\n\n";
},"useData":true});
templates['pages/not-found/not-found.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <h1 class=\"heading heading_large\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":47}}}) : helper)))
    + "</h1>\n    <p class=\"text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":20},"end":{"line":3,"column":35}}}) : helper)))
    + "</p>\n    <a class=\"link\" href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backlink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n</div>\n\n\n";
},"useData":true});
templates['pages/settings/settings.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav sidebar__nav\">\n                <a href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link nav__link_back\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n        </header>\n    </aside>\n    <main class=\"main container__main\">\n        <div class=\"container container_indented\">\n            <img src=\"/images/placeholders/user.png\" alt=\"Пользователь\" class=\"avatar avatar_large\"/>\n            <label class=\"file-picker\">\n                <img src=\"./images/icons/pen.svg\"\n                     alt=\"Загрузка файла\"/>\n                <input class=\"file-picker__input\" type=\"file\" name=\"avatar\"/>\n            </label>\n        </div>\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"form") || (depth0 != null ? lookupProperty(depth0,"form") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form","hash":{},"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":18,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n\n</div>\n";
},"useData":true});
templates['pages/sign-in/sign-in.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"page "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":27}}}) : helper)))
    + "\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"form") || (depth0 != null ? lookupProperty(depth0,"form") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</main>\n";
},"useData":true});
templates['pages/sign-up/sign-up.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"page "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":27}}}) : helper)))
    + "\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"form") || (depth0 != null ? lookupProperty(depth0,"form") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</main>\n";
},"useData":true});
})();