import Vue from 'vue'
import sinon from 'sinon'
import index from '@/index/module/app.vue'
import { renderedText } from '../fixture/util'

describe("component", () => {
    it('index route', () => {
        const rendered = renderedText(index, { })

        expect(rendered).to.contain('va-ui')
    })
})
