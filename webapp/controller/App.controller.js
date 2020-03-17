sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("opensap.theCV.controller.App", {
		onInit : function() {

			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
				education1 : "<h3><strong>BSC (HONS) SOFTWARE ENGINEERING</strong></h3>" +
							"<p><h5>University of Central Lancashire</h5></p>" +
							"<br>" +
							"<p>• Currently enrolled in 2nd year of university,</p>" +
							"<p>• 1st year graduated with average of 91.5% GPA,</p>" +
							"<p>• I’ve been involved in leading development of various programs using agile programming methodologies, focused on C#, C++ and Java.</p>",
				
				spacer : "<br><br><br>",
				
				education2: "<h3><strong>IT TECHNICAL DIPLOMA</strong></h3>" +
							"<p><h5>Zespół Szkół Tekstylno-Handlowych w Żaganiu (Poland)</h5></p>" +
							"<br>" +
							"<p>• Graduated with GPA 4.27 / 5.0,</p>" +
							"<p>• HTML, CSS, PHP and MySQL,</p>" +
							"<p>• Windows Technical Support,</p>" +
							"<p>• PC diagnosis and troubleshooting</p>",
				
				work1 : "<h3><strong>SCRIPTER & SOFTWARE DEVELOPER AT GAMDOM.COM</strong></h3>" +
						"<p>May 2019 - January 2020</p>" +
						"<br>" +
						"<p>• Used AutoIT to design a script for system log analysis to help productivity.</p>" +
						"<p>• Used AutoIT to create an app to handle company’s P2P CS:GO trading system.</p>" +
						"<p>• Used JavaScript developing skills to build a script used to monitor and control chats.</p>",
				
				work2 : "<h3><strong>RETAIL/WORKSHOP MANAGER – USE-IT COMPUTERS</strong></h3>" +
						"<p>February 2017 – Present</p>" +
						"<br>" +
						"<p>• Developed a script used to automatically set up software, it has been used in production for 2.5 years.</p>" +
						"<p>• Managing the store, looking after stock levels, orders, comparing suppliers and negotiating deals.</p>" +
						"<p>• Training new staff in business processes, workshop services and customer service skills.</p>" +
						"<p>• I’ve helped providing bespoke IT support, both on site and remotely.</p>" +
						"<p>• I’m responsible for providing repair services for consumer electronics, both individual and business.</p>",
				
				work3 : "<h3><strong>2ND LINE TECHNICAL SUPPORT / FORENSIC EXPERT – HINDUJA GLOBAL SOLUTIONS LTD</strong></h3>" +
						"<p>September 2015 – January 2017</p>" +
						"<br>" +
						"<p>• Developing and improving SQL-like database queries, using Nexidia Voice Analytics software.</p>" +
						"<p>• I’ve helped to analyze and improve SLAs quality and adherence.</p>" +
						"<p>• Developing and maintenance of business reports, using VBA programming skills.</p>" +
						"<p>• I’ve helped retrieving daily and weekly reports for business performance statistics.</p>" +
						"<p>• I’ve helped improving the business processes by providing suggestions for implementation.</p>" +
						"<p>• I’ve been responsible for providing bespoke 2nd line technical support to customers over the phone, both residential and businesses.</p>" +
						"<p>• I’ve ensured to professionally handle customer complaints and provide the highest standard of customer service.</p>",
						
				contact : "<h3><strong>E-mail:</strong></h3>" +
						  "<p><h3><strong>Phone: </strong></h3></p>" +
						  "<p><h3><strong>LinkedIn:</strong> <a href=\"//www.linkedin.com/in/krzysztof-beszterda-210284a3/\">click here</a></h3></p>",
						  
				skills : "<h3><strong>Additional Skills</strong></h3>" +
						 "<br>" +
						 "<p>• Basic to Intermediate Java, C#, C++, VC++, Pascal, Delphi, AutoIT, PHP</p>" +
						 "<p>• Turbo Pascal/C, Delphi, AutoIT v3, MySQL and PHP servers</p>" +
						 "<p>• Microsoft Office + VBA</p>" +
						 "<p>• Full Cat. B driving license</p>" +
						 "<p>• Cabling, Soldering, Manual/Power tools</p>"
			});
			this.getView().setModel(oModel);
		}
	});
});