# Generated by Django 4.1.3 on 2023-12-17 18:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="order",
            name="estimated_delivery_date",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="order",
            name="order_status",
            field=models.CharField(
                choices=[
                    ("Payment Left", "Payment Left"),
                    ("Placed", "Placed"),
                    ("Making", "Making"),
                    ("Shipped", "Shipped"),
                    ("Fulfilled", "Fulfilled"),
                ],
                max_length=200,
            ),
        ),
        migrations.AddField(
            model_name="product",
            name="order_inpage",
            field=models.IntegerField(default=0),
        ),
    ]
