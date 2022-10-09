export default function NavigationBar(name: string) {
  if (!document.querySelector('#navbar-applications-portal')) {
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    const a = document.createElement('a');
    const link = document.createTextNode(name);
    a.appendChild(link);
    a.title = name;
    a.href = '#';
    a.appendChild(link);

    li.appendChild(a);
    ul.appendChild(li);
    navbar.appendChild(ul);

    navbar.style.overflow = 'hidden';
    navbar.style.backgroundColor = 'green';
    navbar.className = 'navbar';
    navbar.id = 'navbar-applications-portal';
    ul.className = 'main_nav';
    a.className = 'nav_links';

    document.body.insertAdjacentElement('afterbegin', navbar);
    document.body.style.margin = '0';
  }
}
