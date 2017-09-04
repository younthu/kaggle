import scrapy

class BaiduSpider(scrapy.Spider):
    name = 'baidu spider'
    start_urls = ['https://www.baidu.com/s?wd=大胸%20site%3Azhihu.com']

    def parse(self, response):
        for title in response.css('.result.c-container .t a'):
            yield {'title': title.css('::text').extract_first(), 'href': title.css('::href').extract_first()}


