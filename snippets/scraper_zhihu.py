import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_urls = ['http://blog.ilibrary.me']

    def parse(self, response):
        for title in response.css('h1 a'):
            yield {'title': title.css('::text').extract_first()}


