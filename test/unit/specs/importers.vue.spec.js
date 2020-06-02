import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import fakeStore from '../helpers/baseStore';
import Importers from '@/renderer/components/MainPage/Importers';
import AddScraper from '@/renderer/components/MainPage/Importers/AddScraper';
import { scrapers } from '@/modules/scrapers';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Importers', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store(fakeStore);
    wrapper = shallowMount(Importers, { store, localVue });
  });

  it('Should contain an AddScraper component for each scraper', () => {
    expect(wrapper.findAll(AddScraper).length).toBe(scrapers.length);
  });
});
