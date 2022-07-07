import { Component } from '@angular/core';

@Component({
  selector: 'style-color',
  templateUrl: './color.component.html'
})
export class ColorComponent {
    colorRoles = [
        {
            class: 'bg-olive-100',
            hex: '#E2F6F0',
            rgb: '(226, 246, 240)',
            roles: 'Box Background, Button, Table Header Background'
        },
        {
            class: 'bg-olive-200',
            hex: '#CCE6DF',
            rgb: '(204, 230, 223)',
            roles: 'Box Line, Button Hover. Table Header Line'
        },
        {
            class: 'bg-olive-300',
            hex: '#08B4AB',
            rgb: '(8, 180, 171)',
            roles: 'H3(Docs), Card Status'
        },
        {
            class: 'bg-olive-400',
            hex: '#038C65',
            rgb: '(3, 140, 101)',
            roles: 'Primary Brand Color, Button, Border, Text Hover/Selected, Icon, Popup BG'
        },
        {
            class: 'bg-olive-500',
            hex: '#007151',
            rgb: '(0, 113, 81)',
            roles: 'Primary Brand Color, Button Hover'
        },
        {
            class: 'bg-lightgray-100 border border-gray-100',
            hex: '#FFFFFF',
            rgb: '(255, 255, 255)',
            roles: 'Inverse, Box Background, Table Background'
        },
        {
            class: 'bg-lightgray-300',
            hex: '#F9F9F9',
            rgb: '(249, 249, 249)',
            roles: 'Emphasis Background(Hover, Press)'
        },
        {
            class: 'bg-lightgray-400',
            hex: '#F6F6F6',
            rgb: '(246, 246, 246))',
            roles: 'Page Background'
        },
        {
            class: 'bg-gray-100',
            hex: '#DDDDDD',
            rgb: '(221, 221, 221)',
            roles: 'Line, Inputbox Line(Dimmed), Button(Dimmed)'
        },
        {
            class: 'bg-gray-200',
            hex: '#D6D6D6',
            rgb: '(214, 214, 214)',
            roles: 'Line(Layer Panel), Footer Link'
        },
        {
            class: 'bg-gray-300',
            hex: '#CCCCCC',
            rgb: '(204, 204, 204)',
            roles: 'Text'
        },
        {
            class: 'bg-gray-400',
            hex: '#BBBBBB',
            rgb: '(187, 187, 187)',
            roles: 'Text, Inputbox(Line, Dimmed Text)'
        },
        {
            class: 'bg-gray-500',
            hex: '#888888',
            rgb: '(136, 136, 136)',
            roles: 'Text(Sub, Placeholder, Footer), Text Button, Button'
        },
        {
            class: 'bg-gray-600',
            hex: '#555555',
            rgb: '(85, 85, 85)',
            roles: 'Secondary Text(Sub, URL))'
        },
        {
            class: 'bg-gray-700',
            hex: '#222222',
            rgb: '(34, 34, 34)',
            roles: 'Primary Text, Button, Active Line. Footer Background'
        },
        {
            class: 'bg-gnb-active',
            hex: '#FFFDED',
            rgb: '(255, 253, 237)',
            roles: 'Emphasis Background(New, Active)'
        },
        {
            class: 'bg-gnb-link',
            hex: '#FAE000',
            rgb: '(250, 224, 0)',
            roles: 'GNB > Selected Link'
        },
        {
            class: 'bg-wrong-bg',
            hex: '#FFF4F4',
            rgb: '(255, 244, 244)',
            roles: 'Wrong, Box Background'
        },
        {
            class: 'bg-wrong-line',
            hex: '#FF838B',
            rgb: '(255, 131, 139)',
            roles: 'Wrong, Line'
        },
        {
            class: 'bg-wrong-button',
            hex: '#FF3340',
            rgb: '(255, 51, 64)',
            roles: 'Wrong, Button, Line'
        },
        {
            class: 'bg-gnb-bg',
            hex: '#2C2D36',
            rgb: '(44, 45, 54)',
            roles: 'GNB Background'
        },
    ]
}
