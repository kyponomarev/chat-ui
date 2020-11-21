(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['components/button/button.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        type=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"button "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":31}}}) : helper)))
    + "\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"id") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"attributes") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "        onClick=\"onClickHandler\"\n    >"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":5},"end":{"line":9,"column":13}}}) : helper)))
    + "</button>\n\n";
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
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":35,"column":21}}})) != null ? stack1 : "");
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

  return "<div class=\"chat\">\n    <header class=\"header chat__header\">\n        <div class=\"chat__user\">\n            <img src=\"/images/placeholders/user.png\" alt=\"Аватар\" class=\"avatar avatar_small chat__avatar\"/>\n            <div class=\"chat-list__content\">\n                <h1 class=\"text text_bold text_author chat__author-name\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":29}}}) : helper)))
    + "\n                </h1>\n            </div>\n        </div>\n        <a routerlink href=\"/chats/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":35},"end":{"line":11,"column":41}}}) : helper)))
    + "/settings\" class=\"button button_rounded button_icon-only msg-form__submit\">\n            <img src=\"/images/icons/more.svg\"\n                 alt=\"Settings\"/>\n        </a>\n    </header>\n\n    <div class=\"chat__window\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sessions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":36,"column":17}}})) != null ? stack1 : "")
    + "\n    </div>\n    <form class=\"chat__form msg-form\" action=\"\" method=\"\">\n        <label class=\"file-picker msg-form__file-picker\">\n            <img src=\"/images/icons/file.svg\"\n                 alt=\"Загрузка файла\"/>\n            <input class=\"file-picker__input\" type=\"file\" name=\"file\"/>\n        </label>\n        <input class=\"msg-form__input\" type=\"text\" placeholder=\"Сообщение\" name=\"message\"/>\n        <button type=\"submit\" class=\"button button_primary button_rounded button_icon-only msg-form__submit\">\n            <img src=\"/images/icons/arrow_right.svg\"\n                 alt=\"Отправить\"/>\n        </button>\n    </form>\n\n</div>\n";
},"useData":true});
templates['components/chat-list/chat-list.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"chat-list__item\">\n            <a href=\"/chats/"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\" routerlink class=\"chat-list__link\">\n                <img src=\"/images/placeholders/user.png\" alt=\"Аватар\" class=\"avatar chat-list__avatar\"/>\n                <div class=\"chat-list__content\">\n                    <h2 class=\"text text_bold text_author\">\n                        "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "\n                    </h2>\n                </div>\n            </a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"chat-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"chats") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['components/chat-users/chat-users.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"chat-users__item\">\n            <button class=\"button button_rounded button_danger chat-users__button\" data-id=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":92},"end":{"line":5,"column":98}}}) : helper)))
    + "\"\n                    onClick=onRemoveClickHandler\n            >\n                <span>-</span>\n            </button>\n            <img src=\""
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"avatar") : depth0), depth0))
    + "\" alt=\"Аватар\" class=\"avatar chat-users__avatar\"/>\n            <div class=\"chat-users__content\">\n                <h2 class=\"text text_bold text_author\">\n                    "
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"login") : depth0), depth0))
    + "\n                </h2>\n                <p class=\"text text_msg text_color_medium chat-users__detail\">\n                    <span>"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"first_name") : depth0), depth0))
    + "</span>\n                    <span>"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"second_name") : depth0), depth0))
    + "</span>\n                </p>\n            </div>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h2>Пользователи в чате</h2>\n<ul class=\"chat-users\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['components/chat-users-search/chat-users-search.component'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"search-results__item\">\n            <button class=\"button button_rounded button_primary chat-users__button\" data-id=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":93},"end":{"line":4,"column":99}}}) : helper)))
    + "\"\n                    onClick=addClickHandler\n            >\n                <span>+</span>\n            </button>\n\n            <img src=\""
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"avatar") : depth0), depth0))
    + "\" alt=\"Аватар\" class=\"avatar search-results__avatar\"/>\n            <div class=\"search-results__content\">\n                <h2 class=\"text text_bold text_author\">\n                    "
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"login") : depth0), depth0))
    + "\n                </h2>\n                <p class=\"text text_msg text_color_medium search-results__detail\">\n                    <span>"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"first_name") : depth0), depth0))
    + "</span>\n                    <span>"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"second_name") : depth0), depth0))
    + "</span>\n                </p>\n            </div>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"search-results\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
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

  return "            <a routerlink class=\"link\" href=\""
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
    + "\"\n               value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"defaultValue") || (depth0 != null ? lookupProperty(depth0,"defaultValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defaultValue","hash":{},"data":data,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":38}}}) : helper)))
    + "\"\n               onBlur=blurHandler\n               onFocus=focusHandler\n               onKeyup=keyupHandler\n        />\n    </label>\n    <span class=\"form-group__validation-feedback hidden\">\n        "
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"invalidMessage") : depth0), depth0))
    + "\n    </span>\n</div>\n";
},"useData":true});
templates['components/toast/toast.component'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"toast-wrapper\">\n    <div class=\"toast toast_danger "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":44}}}) : helper)))
    + "\">\n        <span class=\"toast__message\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":23}}}) : helper)))
    + "\n        </span>\n    </div>\n</div>\n";
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
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav nav_content-position_space-between sidebar__nav\">\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"createLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"createLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n            <input class=\"search-bar sidebar__search-bar\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"searchBarPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchBarPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchBarPlaceholder","hash":{},"data":data,"loc":{"start":{"line":8,"column":71},"end":{"line":8,"column":95}}}) : helper)))
    + "\"/>\n        </header>\n        <div class=\"sidebar__content\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatList") || (depth0 != null ? lookupProperty(depth0,"chatList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatList","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </aside>\n    <main class=\"main main_centered-horizontal container__main\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chat") || (depth0 != null ? lookupProperty(depth0,"chat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chat","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n</div>\n";
},"useData":true});
templates['pages/chat-settings/chat-settings.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav sidebar__nav\">\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link nav__link_back\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n        </header>\n    </aside>\n    <main class=\"main container__main\">\n        <div class=\"chat\">\n            <header class=\"header chat__header\">\n            </header>\n            <div class=\"chat__window\">\n                <div class=\"chat__users\">\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatUsers") || (depth0 != null ? lookupProperty(depth0,"chatUsers") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatUsers","hash":{},"data":data,"loc":{"start":{"line":15,"column":20},"end":{"line":15,"column":35}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n                <div class=\"chat__search\">\n                    <h2>Поиск</h2>\n                    <form>\n                        <input class=\"search-bar\" placeholder=\"Логин\"\n                               autofocus\n                               onKeyup=keyupHandler\n                        />\n                    </form>\n                    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatUsersSearch") || (depth0 != null ? lookupProperty(depth0,"chatUsersSearch") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatUsersSearch","hash":{},"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":25,"column":41}}}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </div>\n\n        </div>\n    </main>\n</div>\n";
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
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav nav_content-position_space-between sidebar__nav\">\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"createLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"createLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n                <a routerLink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"profileLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n            <input class=\"search-bar sidebar__search-bar\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"searchBarPlaceholder") || (depth0 != null ? lookupProperty(depth0,"searchBarPlaceholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchBarPlaceholder","hash":{},"data":data,"loc":{"start":{"line":8,"column":71},"end":{"line":8,"column":95}}}) : helper)))
    + "\"/>\n        </header>\n        <div class=\"sidebar__content\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatList") || (depth0 != null ? lookupProperty(depth0,"chatList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatList","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </aside>\n    <main class=\"main main_centered container__main\">\n        <h1 class=\"text text_color_medium\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":15,"column":43},"end":{"line":15,"column":52}}}) : helper)))
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
    + "</p>\n    <a routerlink class=\"link\" href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n</div>\n\n\n";
},"useData":true});
templates['pages/new-chat/new-chat.page'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":26}}}) : helper)))
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav sidebar__nav\">\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link nav__link_back\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n        </header>\n        <div class=\"sidebar__content\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"chatList") || (depth0 != null ? lookupProperty(depth0,"chatList") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatList","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </aside>\n    <main class=\"main container__main flex flex_center_horizontal flex_center_vertical\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"form") || (depth0 != null ? lookupProperty(depth0,"form") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </main>\n</div>\n";
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
    + "</p>\n    <a routerlink class=\"link\" href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
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
    + "\">\n    <aside class=\"sidebar container__sidebar\">\n        <header class=\"sidebar__header header\">\n            <nav class=\"nav sidebar__nav\">\n                <a routerlink href=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" class=\"nav__link nav__link_back\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"backLink") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</a>\n            </nav>\n        </header>\n\n        <footer class=\"sidebar__footer\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"logoutButton") || (depth0 != null ? lookupProperty(depth0,"logoutButton") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoutButton","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n        </footer>\n    </aside>\n    <main class=\"main container__main\">\n        <div class=\"container container_indented flex flex_center_horizontal\">\n            <form>\n                <img\n                        src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userAvatar") || (depth0 != null ? lookupProperty(depth0,"userAvatar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userAvatar","hash":{},"data":data,"loc":{"start":{"line":17,"column":29},"end":{"line":17,"column":43}}}) : helper)))
    + "\"\n                        alt=\"Аватар\" class=\"avatar avatar_large\"/>\n                <label class=\"file-picker\">\n                    <img src=\"./images/icons/pen.svg\"\n                         alt=\"Загрузка файла\"/>\n                    <input class=\"file-picker__input\" type=\"file\" name=\"avatar\"\n                           onChange=avatarChangeHandler>\n                </label>\n            </form>\n        </div>\n        <div class=\"flex flex_center_horizontal\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"profileForm") || (depth0 != null ? lookupProperty(depth0,"profileForm") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profileForm","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"passwordForm") || (depth0 != null ? lookupProperty(depth0,"passwordForm") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passwordForm","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </main>\n</div>\n";
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