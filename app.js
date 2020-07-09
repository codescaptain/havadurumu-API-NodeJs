const express=require("express");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const seo = require("slugify");

const API_IL_URI="https://www.hurriyet.com.tr/hava-durumu/{0}/";


const app=express();

app.get('/get/:city',async(req,res)=>{
    var city=req.params.city;

    var datas=[];
    await (fetch(API_IL_URI.replace('{0}',seo(city))))
    .then(response=>response.text())
    .then(body=>{
        const $=cheerio.load(body);


        $('.container.weather-container').each(function (i,elem) {
            datas[i]={
                city:city.charAt(0).toUpperCase()+city.slice(1),
                now:$(this)
                    .find('.container.weather-detail-container div[class=row] p')
                    .first()
                    .text(),
                hightTemp:$(this)
                    .find('.col-12.col-md-4.col-lg-3.pr-0 div[class=row] .col-5.col-md-6.px-0 p[class=weather-detail-hightemp]')
                    .text(),
                lowTemp:$(this)
                    .find('.col-12.col-md-4.col-lg-3.pr-0 div[class=row] .col-5.col-md-6.px-0 p[class=weather-detail-lowtemp]')
                    .text(),
                OneDayAfter:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-date')
                    .slice(0)
                    .eq(0)
                    .text(),

                OneDayAfterTemp:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-temp')
                    .slice(0)
                    .eq(0)
                    .text(),
                OneDayAfterFeel:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-feel')
                    .slice(0)
                    .eq(0)
                    .text(),

                OneDayAfterCondation:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-condition')
                    .slice(0)
                    .eq(0)
                    .text(),
//-------------------------

                TwoDayAfterDate:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-date')
                    .slice(0)
                    .eq(1)
                    .text(),
                TwoDayAfterTemp:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-temp')
                    .slice(0)
                    .eq(1)
                    .text(),
                TwoDayAfterFeel:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-feel')
                    .slice(0)
                    .eq(1)
                    .text(),
                TwoDayAfterCondation:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-condition')
                    .slice(0)
                    .eq(1)
                    .text(),
                //-----------------
                ThereeDayAfterDate:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-date')
                    .slice(0)
                    .eq(2)
                    .text(),
                ThereeDayAfterTemp:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-temp')
                    .slice(0)
                    .eq(2)
                    .text(),
                ThereeDayAfterFeel:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-feel')
                    .slice(0)
                    .eq(2)
                    .text(),
                ThereeDayAfterCondation:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-condition')
                    .slice(0)
                    .eq(2)
                    .text(),
                //------
                FourDaysAfterDate:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-date')
                    .slice(0)
                    .eq(3)
                    .text(),
                FourDaysAfterTemp:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-temp')
                    .slice(0)
                    .eq(3)
                    .text(),
                FourDaysAfterFeel:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-feel')
                    .slice(0)
                    .eq(3)
                    .text(),
                FourDaysAfterCondation:$(this)
                    .find('.container.content-card-container div[id=weather-card-swiper] .swiper-wrapper.total-slide-4 .col-3.swiper-slide .content-card .content-card-condition')
                    .slice(0)
                    .eq(3)
                    .text()
                //---------




            }

        })
    })
    res.send(datas);
})




const port= process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("Proje Ayakta");
})