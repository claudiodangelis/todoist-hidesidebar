var HS = {
    selector: 'list_holder',
    get isActive () { return !!location.hash.match(/%26hidesidebar$/) },
    hide: function () {
        document.getElementById(this.selector).style.visibility = 'hidden';
        if (!HS.isActive) {
            location.hash = location.hash += '%26hidesidebar';
        }
    },
    show: function () {
        document.getElementById(this.selector).style.visibility = 'visible';
        if (HS.isActive) {
            location.hash = location.hash.replace(/%26hidesidebar$/g, '');
        }
    },
    createButton: function () {
        var anchor = document.createElement('A');
        anchor.setAttribute('href', '#');
        anchor.setAttribute('id', 'todoist-hs-toggle');
        anchor.textContent = (this.isActive) ? '+' : '-';
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            if (HS.isActive) {
                HS.show();
                document.getElementById('todoist-hs-toggle').textContent = '-';
            } else {
                HS.hide();
                document.getElementById('todoist-hs-toggle').textContent = '+';
            }
        });
        document.getElementById('td_logo').appendChild(anchor);
    },
    init: function () {
        if (this.isActive) {
            setTimeout(function () {
                location.hash.replace(/%26hidesidebar$/g, '');
                location.hash += '%26hidesidebar';
            }, 500);
            HS.hide();
        }
        this.createButton();
    }
};
HS.init();
